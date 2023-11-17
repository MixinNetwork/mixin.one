import { SHA3 } from 'sha3';
import { Base58 } from '@ethersproject/basex';
import { stringify } from 'uuid';

const MainAddressPrefix = 'XIN';
const MixAddressPrefix = 'MIX';
const MixAddressVersion = 2;

function AddressUtils() {
}

AddressUtils.prototype = {
  verifyMainnetAddress: function(address) {
    try {
      if (!address.startsWith(MainAddressPrefix)) return false;
  
      const data = Base58.decode(address.slice(3));
      if (data.length !== 68) return false;
  
      const payload = data.subarray(0, data.length - 4);
      const msg = Buffer.concat([Buffer.from(MainAddressPrefix), Buffer.from(payload)]);
      const checksum = new SHA3(256).update(msg).digest('binary');
      if (!checksum.subarray(0, 4).equals(data.subarray(64))) return false;
      return true;
    } catch {
      return false;
    }
  },

  verifyMixAddress: function(address) {
    try {
      if (!address.startsWith(MixAddressPrefix)) return false;
  
      const data = Base58.decode(address.slice(3));
      if (data.length < 3 + 16 + 4) return false;
  
      const payload = data.subarray(0, data.length - 4);
      const msg = Buffer.concat([Buffer.from(MixAddressPrefix), Buffer.from(payload)]);
      const checksum = new SHA3(256).update(msg).digest('binary');
      if (!checksum.subarray(0, 4).equals(data.subarray(data.length - 4))) return false;
  
      const version = data.at(0);
      if (version !== MixAddressVersion) return false;
      const threshold = data.at(1);
      const total = data.at(2);
      if (!threshold || !total || threshold === 0 || threshold > total || total > 64) return false;
  
      const memberData = payload.subarray(3);
      if (memberData.length === total * 16) {
        for (let i = 0; i < total; i++) {
          stringify(memberData, 16 * i);
        }
        return true;
      } else if (memberData.length === total * 64) return true;
  
      return false;
    } catch {
      return false;
    }
  }
}

export default new AddressUtils();
