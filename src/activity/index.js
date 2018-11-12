import './developer.scss';
import $ from 'jquery';

function Activity (router, api) {
  this.router = router;
  this.api = api;
  this.templateDeveloper = require('./developer.html');
}

Activity.prototype = {
  developer: function() {
    $('body').attr('class', 'developer layout');;
    $('#layout-container').html(this.templateDeveloper({
      logoURL: require('../home/logo.png'),
      headURL: require('./material/head.png'),
      headBannerURL: require('./material/head-banner.png'),
      coinviewURL: require('./material/ic_coinview.png'),
      foxURL: require('./material/ic_fox.png'),
      onoURL: require('./material/ic_ono.png'),
      candyURL: require('./material/ic_candy.png'),
      gitterURL: require('./material/ic_gitter.png'),
      prizeURL: require('./material/ic_prize.png'),
      competitionURL: require('./material/competition_bg.png'),
      judgeOneURL: require('./material/judge_1.png'),
      judgeTwoURL: require('./material/judge_2.png'),
      judgeThreeURL: require('./material/judge_3.png'),
      judgeFourURL: require('./material/judge_4.png'),
      mediaOneURL: require('./material/media_01.png'),
      mediaTwoURL: require('./material/media_02.png'),
      mediaThreeURL: require('./material/media_03.png'),
      mediaFourURL: require('./material/media_04.png'),
      mediaFiveURL: require('./material/media_05.png'),
      mediaSixURL: require('./material/media_06.png'),
      mediaSevenURL: require('./material/media_07.png'),
      mediaEightURL: require('./material/media_08.png'),
      mediaNineURL: require('./material/media_09.png'),
      mediaTenURL: require('./material/media_10.png'),
      mediaElevenURL: require('./material/media_11.png'),
      mediaTwelveURL: require('./material/media_12.png'),
      mediaThirteenURL: require('./material/media_13.png'),
      mediaFourteenURL: require('./material/media_14.png'),
      mediaFifTeenURL: require('./material/media_15.png'),
      mediaSixteenURL: require('./material/media_16.png'),
      mediaSeventeenURL: require('./material/media_17.png'),
      mediaEighteenURL: require('./material/media_18.png'),
      mediaNineteenURL: require('./material/media_19.png'),
      mediaTwentyURL: require('./material/media_20.png'),
      mediaTwentyOneURL: require('./material/media_21.png'),
      mediaTwentyTwoURL: require('./material/media_22.png'),
      mediaTwentyThreeURL: require('./material/media_23.png'),
      mediaTwentyFourURL: require('./material/media_24.png'),
      scheduleOneURL: require('./material/schedule_1.png'),
      scheduleTwoURL: require('./material/schedule_2.png'),
      scheduleThreeURL: require('./material/schedule_3.png'),
      scheduleFourURL: require('./material/schedule_4.png'),
      termOneURL: require('./material/term_01.png'),
      termTwoURL: require('./material/term_02.png'),
      termThreeURL: require('./material/term_03.png'),
      termFourURL: require('./material/term_04.png'),
      termFiveURL: require('./material/term_05.png'),
      termSixURL: require('./material/term_06.png'),
      termSevenURL: require('./material/term_07.png'),
      termEightURL: require('./material/term_08.png'),
      termNineURL: require('./material/term_09.png'),
      cedricURL: require('./material/cedric.png'),
      juURL: require('./material/ju.png'),
      lilinURL: require('./material/lilin.png'),
      jeffreyURL: require('./material/jeffrey.png'),
      liuURL: require('./material/liu.png'),
      yuURL: require('./material/yu.png')
    }));
  }
}

export default Activity;
