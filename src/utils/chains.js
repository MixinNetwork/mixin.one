function Chains() {
}

const ids = {
  'c6d0c728-2624-429b-8e0d-d9d19b6592fa': 'Bitcoin',
  'fd11b6e3-0b87-41f1-a41f-f0e9b49e5bf0': 'BitcoinCash',
  '574388fd-b93f-4034-a682-01c2bc095d17': 'BitcoinSV',
  '76c802a2-7c88-447f-a93e-c29c9e5dd9c8': 'Litecoin',
  '43d61dcd-e413-450d-80b8-101d5e903357': 'Ethereum',
  '2204c1ee-0ea2-4add-bb9a-b3719cfff93a': 'EthereumClassic',
  '8f5caf2a-283d-4c85-832a-91e83bbf290b': 'Decred',
  '23dfb5a5-5d7b-48b6-905f-3970e3176e27': 'Ripple',
  '990c4c29-57e9-48f6-9819-7d986ea44985': 'Siacoin',
  '6cfe566e-4aad-470b-8c9a-2fd35b49c68d': 'EOS',
  '6770a1e5-6086-44d5-b60f-545f9d9e8ffd': 'Dogecoin',
  '6472e7e3-75fd-48b6-b1dc-28d294ee1476': 'Dash',
  'c996abc9-d94e-4494-b1cf-2a3fd3ac5714': 'Zcash',
  '27921032-f73e-434e-955f-43d55672ee31': 'NEM',
  'a2c5d22b-62a2-4c13-b3f0-013290dbac60': 'Horizen',
  '25dabac5-056a-48ff-b9f9-f67395dc407c': 'TRON',
  '56e63c06-b506-4ec5-885a-4a5ac17b83c1': 'Stellar',
  'b207bce9-c248-4b8e-b6e3-e357146f3f4c': 'MassGrid',
  '443e1ef5-bc9b-47d3-be77-07f328876c50': 'Bytom',
  '7397e9f1-4e42-4dc8-8a3b-171daaadd436': 'Cosmos',
  '17f78d7c-ed96-40ff-980c-5dc62fecbc85': 'Binance',
  '05c5ac01-31f9-4a69-aa8a-ab796de1d041': 'Monero',
  '05891083-63d2-4f3d-bfbe-d14d7fb9b25a': 'BitShares',
};

const logos = {
  'Bitcoin': 'https://images.mixin.one/HvYGJsV5TGeZ-X9Ek3FEQohQZ3fE9LBEBGcOcn4c4BNHovP4fW4YB97Dg5LcXoQ1hUjMEgjbl1DPlKg1TW7kK6XP=s128',
  'BitcoinCash': 'https://images.mixin.one/tqt14x8iwkiCR_vIKIw6gAAVO8XpZH7ku7ZJYB5ArMRA6grN9M1oCI7kKt2QqBODJwr17sZxDCDTjXHOgIixzv6X=s128',
  'BitcoinSV': 'https://images.mixin.one/1iUl5doLjMSv-ElcVCI4YgD1uIayDbZcQP0WjFEajoY1-qQZmVEl5GgUCtsp8CP0aj96a5Rwi-weQ5YA64lyQzU=s128',
  'Litecoin': 'https://images.mixin.one/dLK5T9I4YFA094o6nn-qZ_TWLUtIrL0xtjxOyURaLoPcl94m0JKQhXQiOrC775LS9d8apDfLXVfbpDzGmWDf0CWJ=s128',
  'Ethereum': 'https://images.mixin.one/zVDjOxNTQvVsA8h2B4ZVxuHoCF3DJszufYKWpd9duXUSbSapoZadC7_13cnWBqg0EmwmRcKGbJaUpA8wFfpgZA=s128',
  'EthereumClassic': 'https://images.mixin.one/fM9wgyNyB3Uiopx2FRFxhr-sYrvXZtJ-uCpk975wGdpoehoA59rIU-BQ4s_6YFMDEthQ74KCPysOIWSFK4vUG_Y=s128',
  'Decred': 'https://images.mixin.one/ATSnFPH9vp6WPJ-KB9h_2JT93519YUPBbbbgAbPJBStlF3tFkP70iiZqDGi8ha-LssoqHMdRItF2_Un4FbglYMI=s128',
  'Ripple': 'https://images.mixin.one/SyX2tH2mBbSc45IfkOysbbd8WtPEjla5R3xT9ym0tbKv_vAyzl_Jd5qEYsOhKyuFRv09w3uB4Vzs2XJuJzZeO7e_=s128',
  'Siacoin': 'https://images.mixin.one/K1qFRFwAn2aJ-SEM4Tya7y_HBelBZsL5J1WEdZX4S3-APXHExcsZUYdyQAMRhgebcto3CF_OLoImx8U9-4-M7C4=s128',
  'EOS': 'https://images.mixin.one/a5dtG-IAg2IO0Zm4HxqJoQjfz-5nf1HWZ0teCyOnReMd3pmB8oEdSAXWvFHt2AJkJj5YgfyceTACjGmXnI-VyRo=s128',
  'Dogecoin': 'https://images.mixin.one/D1quwKOIaKBNIx6EL1znNS09vRnh00FP7BWwOJUtI_9CFlohJLuyG6CjcU9x4YXu9LSzGs0QqRSG54wcfsOtTMU=s128',
  'Dash': 'https://images.mixin.one/ReOP8DBeVc4VO5myA0zuURtNBJJGJCL4KB3Gj5bvBOeP4LW_ZZrwl7CesWhE3aSTm931sOGz69DcGIUmdb6RkF4=s128',
  'Zcash': 'https://images.mixin.one/9QWOYgcD0H7q1cH6PaSM08FQ549epnEzqIQ2EgEfK2s82jhsIu1wDKmsR7rkPFwjIYKOILteq7mW1hIaXcy4DhI=s128',
  'NEM': 'https://images.mixin.one/I9f9bWw457YiAGMxyrNtu4aCezzgnnIYuxnNBzkN3aGG32HeOzFl-nA4miBRnU-3qnNylyiDZqoS-JfzfstnuQ=s128',
  'Horizen': 'https://images.mixin.one/CFQzgS3lZztswzt8mKVWAOWAJDhlQQw2gQZN4_-2bRAzRivObDq-KOdjGIv_vcY6FGJLFlFxN4vSrFb7t0uxsQ=s128',
  'TRON': 'https://images.mixin.one/SXfRh0WJZpHrDAbBItuwwLp_TPML7hrbAPHGIz_EQRga0fFm5yGtNd55_W0ZZv9HRj_6W6kE4O4tq8W78mutAPE=s128',
  'Stellar': 'https://images.mixin.one/PYek3gX0bUJyYhdewmrhh0IUAlbDf-gXpVEZrkW74v0Bsk24FO0jvP71IcjTOeDOlqUdjUVK-S0jdJ4BOkXi2XY=s128',
  'MassGrid': 'https://images.mixin.one/PbftbKJkl5Fu34falXrpoaEqDRIdNonuISYlz2ripfchyCSXEafNqZYTP_4pvFXql8Hhd6GznWe2SsC_sGLDHgo=s128',
  'Bytom': 'https://images.mixin.one/pZQ0HL075WytmDYtyVdNXfn_zvAkCMtwcv9665oXtm8h86W_5mf1ROqidtq2ByY7xBM2xxxxbHP3oKScCjnQK5GR=s128',
  'Cosmos': 'https://images.mixin.one/t-HH_7zAE5Y7OG9WgC1muIeFWJee4WypzbdJ5FjakEIivRYnSz89CBR4twXH-K_wFFodURRhYulVY-PrOO35ZoQ=s128',
  'Binance': 'https://images.mixin.one/HCjLu6VM0XA7ouRcZJGDTOzE7zoXaA8LgESw075VW5teZ27AGUgyGrc4jnzuK5LtgT5HJQDSNSOImnU3IcUsBLoF=s128',
  'Monero': 'https://images.mixin.one/vffCzX0PPO1f1D0sRFCkpJuSRYbxEM5u-hl4FMoUeWk8g899U5eyVKnFENiEJ4AXU0s-62mx1nBR3c_pHFROuw=s128',
  'BitShares': 'https://images.mixin.one/vPCw4G1BhBWLzFSVt8jMJxq7LhQgVRbn_IbgJif9mixgLyJfBTlrc4TbELTThAwQCdVqikJQNDDQ84nQZLVf1yGm=s128',
};

Chains.prototype = {
  getLogo: function (id) {
    let chain = ids[id];
    if (chain) {
      return logos[chain];
    }
    return '';
  }
}

export default new Chains();
