/* eslint-disable prettier/prettier */
import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
  RepeatMode,
  Event,
} from 'react-native-track-player';

export async function setupPlayer() {
  let isSetup = false;
  try {
    await TrackPlayer.getCurrentTrack();
    isSetup = true;
  } catch {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      android: {
        appKilledPlaybackBehavior:
          AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
      },
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.SeekTo,
      ],
      compactCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
      ],
      progressUpdateEventInterval: 2,
    });

    isSetup = true;
  } finally {
    return isSetup;
  }
}


export async function addTracks() {
  await TrackPlayer.add([
    {
      id: '1',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-001-muslimcentral.com.mp3?alt=media&token=3c151383-2902-4ccf-8d75-f60e426af79d',
      title: 'سُوْرَۃُ الفَاتِحَة',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 51,
      
      
    },
    {
      id: '2',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-002-muslimcentral.com.mp3?alt=media&token=8c9cc8ed-9178-4f5e-a631-b056cc20e8f9',
      title: 'سُوْرَۃُ البَقَرَة',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 7569,
    },
    {
      id: '3',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-003-muslimcentral.com.mp3?alt=media&token=015f6f85-5d50-4508-8bae-f6707389ef8a',
      title: 'سُوْرَۃ آلِ عِمْرَان',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 4740,
    },
    {
      id: '4',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-004-muslimcentral.com.mp3?alt=media&token=49f9373c-b6b4-45be-9ca8-bc4239d257c6',
      title: 'سُوْرَۃُ النِّسَاء',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 4800,
    },
    {
      id: '5',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-005-muslimcentral.com.mp3?alt=media&token=c3530915-577b-46e4-98ba-92944fa74f8d',
      title: 'سُوْرَۃُ المَائِدَة',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 3780,
    },{
      id: '6',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-006-muslimcentral.com.mp3?alt=media&token=ef0f08a4-15e6-4989-89ec-7d225803a2fb',
      title: ' سُوْرَۃُ الأَنْعَام',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 4350,
    },
    {
      id: '7',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-007-muslimcentral.com.mp3?alt=media&token=2d775766-a3e4-4026-a21f-9528a47e3c3d',
      title: 'سُوْرَۃُ الأَعْرَاف',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 4980,
    },
    {
      id: '8',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-008-muslimcentral.com.mp3?alt=media&token=87f1d4dd-fb93-474b-8356-f292f9b41cac',
      title: 'سُوْرَۃُ الأَنْفَال',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 1860,
    },
    {
      id: '9',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-009-muslimcentral.com.mp3?alt=media&token=a1d77837-7f2c-47b6-9a23-66e05fb8b907',
      title: '	سُوْرَۃُ التَّوْبَة',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 3600,
    },
    {
      id: '10',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-010-muslimcentral.com.mp3?alt=media&token=816f5975-82b6-45ff-9759-88d74df30389',
      title: 'سُوْرَۃ يُونُس',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 2700,
    },
    {
      id: '11',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-011-muslimcentral.com.mp3?alt=media&token=f880b27e-9103-40f5-9b50-bb61b09899eb',
      title: 'سُوْرَۃ هُود',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 2820,
    },
    {
      id: '12',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-012-muslimcentral.com.mp3?alt=media&token=df385825-a84d-4e98-9494-2617caf727a3',
      title: '	سُوْرَۃ يُوسُف',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 2520,
    },{
      id: '13',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-013-muslimcentral.com.mp3?alt=media&token=fb2855a6-48cc-4676-95f5-6abd5531a5c2',
      title: 'سُوْرَۃ الرَّعْد',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 1260,
    },{
      id: '14',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-014-muslimcentral.com.mp3?alt=media&token=257052b0-3613-44d2-9f53-3984f5259061',
      title: 'سُوْرَۃُ إِبْرَاهِيم',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 1260,
    },
    {
      id: '15',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-015-muslimcentral.com.mp3?alt=media&token=8461e7db-235a-4d88-bb4c-b38145482b0c',
      title: 'سُوْرَۃُ الحِجْر',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 960,
    },
    {
      id: '16',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-016-muslimcentral.com.mp3?alt=media&token=bd89bdbc-259e-476a-afc6-a3681381b6fd',
      title: 'سُوْرَۃُ النَّحْل',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 2580,
    },
    {
      id: '17',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-017-muslimcentral.com.mp3?alt=media&token=f2a2c08e-9a0f-40b2-9d84-756edb91f0ea',
      title: 'سُوْرَۃُ الإِسْرَاء',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 1980,
    },
    {
      id: '18',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-018-muslimcentral.com.mp3?alt=media&token=b29e461a-fa68-4da7-8369-96722969d2fb',
      title: '	سُوْرَۃ الكَهْف',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 2010,
    },{
      id: '19',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-019-muslimcentral.com.mp3?alt=media&token=1be9c252-fe24-4b70-9753-3221caa97de1',
      title: 'سُوْرَۃ مَرْيَم',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 1290,
    },{
      id: '20',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-020-muslimcentral.com.mp3?alt=media&token=61ab275c-2015-4330-9fde-785e1fe39115',
      title: 'سُوْرَۃ طٰهٰ',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 1620,
    },
    {
      id: '21',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-021-muslimcentral.com.mp3?alt=media&token=71a66515-f821-49cc-8f7c-46b6db706146',
      title: 'سُوْرَۃُ الأَنْبِيَاء',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 1590,
    },
    {
      id: '22',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-022-muslimcentral.com.mp3?alt=media&token=9ba02676-4a20-442d-aec5-aeaa1ebfbfa6',
      title: 'سُوْرَۃ الحَجّ',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 1770,
    },
    {
      id: '23',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-023-muslimcentral.com.mp3?alt=media&token=2bf3b2c8-fde3-43df-870b-2bda2169e00f',
      title: 'سُوْرَۃُ المُؤْمِنُون',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 1500,
    },
    {
      id: '24',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-024-muslimcentral.com.mp3?alt=media&token=a0283dca-bf42-4236-90ec-3befbfe8f9e0',
      title: 'سُوْرَۃ النُّور',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 1860,
    },
    {
      id: '25',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-025-muslimcentral.com.mp3?alt=media&token=ff20d9e4-3593-44fb-ab3d-44947616a289',
      title: '	سُوْرَۃ الفُرْقَان',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 1110,
    },{
      id: '26',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-026-muslimcentral.com.mp3?alt=media&token=bd9fbce6-8002-4284-aec2-a0df36fcf10b',
      title: 'سُوْرَۃُ الشُّعَرَاء',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 1860,
    },{
      id: '27',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-027-muslimcentral.com.mp3?alt=media&token=31dce5f9-fb43-48b4-8c8c-f5d07e0d32a7',
      title: 'سُوْرَۃُ النَّمْل',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 1590,
    },
    {
      id: '28',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-028-muslimcentral.com.mp3?alt=media&token=5173e9e8-fe64-4f15-900d-da7b5c5f6f73',
      title: 'سُوْرَۃُ القَصَص',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 1920,
    },
    {
      id: '29',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-029-muslimcentral.com.mp3?alt=media&token=d05414fc-0594-4a4e-99b5-339b711d7d5b',
      title: '	سُوْرَۃُ العَنْكَبُوت',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 1320,
    },
    {
      id: '30',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-030-muslimcentral.com.mp3?alt=media&token=6a71ace1-b06f-4664-b289-9e25a8de648b',
      title: 'سُوْرَۃ الرُّوم',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 1200,
    },
   
    {
      id: '31',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-031-muslimcentral.com.mp3?alt=media&token=0e228f18-fa46-4483-8107-6dca164d7f66',
      title: 'سُوْرَۃ لُقْمَان',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 720,
    },
    {
      id: '32',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-032-muslimcentral.com.mp3?alt=media&token=b7172282-1198-4352-9ea1-68138c2a8551',
      title: 'سُوْرَۃُ السَّجْدَة',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 540,
    },
    {
      id: '33',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-033-muslimcentral.com.mp3?alt=media&token=98423d41-84be-494b-bd8c-3ce64ad7d7aa',
      title: 'سُوْرَۃُ الأَحْزَاب',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 1770,
    },
    
    {
      id: '34',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-034-muslimcentral.com.mp3?alt=media&token=42cb5893-397a-4b5c-babf-b6a5c6771424',
      title: 'سُوْرَۃ سَبَأ',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 1140,
    },
    {
      id: '35',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-035-muslimcentral.com.mp3?alt=media&token=d68c096e-ef9c-411a-885e-806e088025ea',
      title: '	سُوْرَۃ فَاطِر',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 1050,
    },
    {
      id: '36',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-036-muslimcentral.com.mp3?alt=media&token=6f40308e-da71-4efc-8300-079a1fe61495',
      title: '	سُوْرَۃ يٰس',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 1050,
    },
    {
      id: '37',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-037-muslimcentral.com.mp3?alt=media&token=ee5bb5e2-7175-448d-82e5-4eff071e38bb',
      title: 'سُوْرَۃُ الصَّافَّات',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 1470,
    },{
      id: '38',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-038-muslimcentral.com.mp3?alt=media&token=da75a700-9e40-4e3b-911f-b3271956fd9b',
      title: 'سُوْرَۃ ص',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 1080,
    },
    {
      id: '39',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-039-muslimcentral.com.mp3?alt=media&token=560c04dd-8757-4d55-8961-fd4cd72e8fda',
      title: 'سُوْرَۃُ الزُّمَر',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 1620,
    },
    {
      id: '40',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-040-muslimcentral.com.mp3?alt=media&token=0949ccf2-ec6f-4226-9b7f-3b77162698e2',
      title: 'سُوْرَۃ غَافِر',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 1590,
    },
    {
      id: '41',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-041-muslimcentral.com.mp3?alt=media&token=a76ba925-aed5-49dc-aa39-1ae40e9ebd1b',
      title: '	سُوْرَۃ فُصِّلَت',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 1170,
    },
    {
      id: '42',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-042-muslimcentral.com.mp3?alt=media&token=c8c13dd1-97eb-42da-a25f-9e0137e1d487',
      title: 'سُوْرَۃُ الشُّورىٰ',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 1170,
    },{
      id: '43',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-043-muslimcentral.com.mp3?alt=media&token=9ed0dcdf-1519-41f5-8722-d6078d33ab07',
      title: 'سُوْرَۃُ الزُّخْرُف',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 1230,
    },{
      id: '44',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-044-muslimcentral.com.mp3?alt=media&token=b0c9d371-3ec6-4edc-9947-edffe951b33e',
      title: 'سُوْرَۃ الدُّخَان',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 600,
    },
    {
      id: '45',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-045-muslimcentral.com-correction.mp3?alt=media&token=2c612e81-7322-4ee4-8b48-3cb2bc193c46',
      title: 'سُوْرَۃ الجَاثِيَة',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 630,
    },
    {
      id: '46',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-046-muslimcentral.com.mp3?alt=media&token=0a22af20-fd17-4332-aca0-7bfdcddc16bf',
      title: 'سُوْرَۃُ الأَحْقَاف',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 960,
    },
    {
      id: '47',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-047-muslimcentral.com.mp3?alt=media&token=77a829d5-cd1b-4c59-9194-3d3d5da703dd',
      title: '	سُوْرَۃ مُحَمَّد',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 720,
    },
    {
      id: '48',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-048-muslimcentral.com.mp3?alt=media&token=3cf71c03-6e2e-462b-a132-78f8c28ff4f5',
      title: 'سُوْرَۃُ الفَتْح',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 700,
    },
    {
      id: '49',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-049-muslimcentral.com.mp3?alt=media&token=0129da02-26fc-470c-8066-d3f5d4d90778',
      title: 'سُوْرَۃُ الحُجُرَات',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 510,
    },{
      id: '50',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-050-muslimcentral.com.mp3?alt=media&token=cf280c75-924d-4efc-af23-0c49180bdac2',
      title: 'سُوْرَۃ ق',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 570,
    },{
      id: '51',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-051-muslimcentral.com.mp3?alt=media&token=461483c0-7781-4f3f-8f13-d8dea893cb56',
      title: 'سُوْرَۃُ الذَّارِيَات',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 510,
    },
    {
      id: '52',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-052-muslimcentral.com.mp3?alt=media&token=e0801a58-6350-4f5e-9571-a8387dc08f75',
      title: 'سُوْرَۃ الطُّور',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 482,
    },
    {
      id: '53',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-053-muslimcentral.com.mp3?alt=media&token=ee3e7845-9b72-4650-8875-271b37a69b61',
      title: '	سُوْرَۃُ النَّجْم',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 450,
    },
    {
      id: '54',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-054-muslimcentral.com.mp3?alt=media&token=f85e72d6-e336-402f-ad71-768b9973e1b4',
      title: '	سُوْرَۃُ القَمَر',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 480,
    },
    {
      id: '55',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-055-muslimcentral.com.mp3?alt=media&token=ee640eac-3c66-4c97-a4c9-0912de00dcf5',
      title: 'سُوْرَۃ الرَّحْمَٰن',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 690,
    },
    {
      id: '56',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-056-muslimcentral.com.mp3?alt=media&token=5c83825c-9989-417d-8c69-e482ead07d76',
      title: 'سُوْرَۃُ الوَاقِعَة',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 700,
    },
    {
      id: '57',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-057-muslimcentral.com.mp3?alt=media&token=9434fbc2-41a2-4334-8012-539d8df2344a',
      title: 'سُوْرَۃُ الحَدِيد',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 810,
    },{
      id: '58',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-058-muslimcentral.com.mp3?alt=media&token=c209ea2d-0ff3-46e7-9bdb-e727e0bff754',
      title: 'سُوْرَۃُ المُجَادِلَة',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 610,
    },
    {
      id: '59',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-059-muslimcentral.com.mp3?alt=media&token=bfc85e9f-4f6d-435d-872e-58ce650bf97d',
      title: 'سُوْرَۃُ الحَشْر',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 630,
    },
    {
      id: '60',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-060-muslimcentral.com.mp3?alt=media&token=77b0dbaf-8174-4309-b712-603d4b130c37',
      title: 'سُوْرَۃُ المُمْتَحَنَة',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 450,
    },
    {
      id: '61',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-061-muslimcentral.com.mp3?alt=media&token=6dfbd63a-cadd-40de-9a2f-050d8b899dca',
      title: 'سُوْرَۃُ الصَّفّ',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 300,
    },
    {
      id: '62',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-062-muslimcentral.com.mp3?alt=media&token=2a54e8df-309c-42c1-a6b1-2c1bd714afc9',
      title: 'سُوْرَۃُ الجُمُعَة',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 210,
    },
    {
      id: '63',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-063-muslimcentral.com.mp3?alt=media&token=dd6c8ca7-04ae-42f8-a752-acd7cb4e23f0',
      title: 'سُوْرَۃُ المُنَافِقُون',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 270,
    },
    {
      id: '64',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-064-muslimcentral.com.mp3?alt=media&token=253412c9-106b-4860-a7f5-36e3c3ea0301',
      title: 'سُوْرَۃُ التَّغَابُن',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 330,
    },{
      id: '65',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-065-muslimcentral.com.mp3?alt=media&token=79f7025a-4794-444c-ade9-b620c2168787',
      title: '	سُوْرَۃُ الطَّلَاق',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 360,
    },{
      id: '66',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-066-muslimcentral.com.mp3?alt=media&token=0992d60b-68d8-485e-8a34-8f9b9d133467',
      title: '	سُوْرَۃُ التَّحْرِيم',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 369,
    },
    {
      id: '67',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-067-muslimcentral.com.mp3?alt=media&token=aba819dd-5a20-45d7-8e93-c495bde20774',
      title: '	سُوْرَۃُ المُلْك',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 450,
    },
    {
      id: '68',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-068-muslimcentral.com.mp3?alt=media&token=a3167a5e-db6b-4706-8552-bc8feeb81a9c',
      title: 'سُوْرَۃ القَلَم',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 455,
    },
    {
      id: '69',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-069-muslimcentral.com.mp3?alt=media&token=a244500f-6811-4a85-b246-e6984668f15f',
      title: 'سُوْرَۃ الحَاقَّة',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 390,
    },
    {
      id: '70',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-070-muslimcentral.com.mp3?alt=media&token=37ab30ca-1d25-49b2-ab10-40223a6bc237',
      title: '	سُوْرَۃُ المَعَارِج',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 318,
    },{
      id: '71',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-071-muslimcentral.com.mp3?alt=media&token=da40428d-d63a-4956-8dc6-1b6738f68111',
      title: 'سُوْرَۃ نُوح',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 270,
    },{
      id: '72',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-072-muslimcentral.com.mp3?alt=media&token=bc7b4434-5471-425b-a26c-731bce1ffa42',
      title: '	سُوْرَۃُ الجِنّ',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 324,
    },
    {
      id: '73',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-073-muslimcentral.com.mp3?alt=media&token=ce5bac7e-8af1-494b-a72e-059020a5d1da',
      title: 'سُوْرَۃُ المُزَّمِّل',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 240,
    },
    {
      id: '74',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-074-muslimcentral.com.mp3?alt=media&token=0458d029-df49-46d4-a2e0-40361569c2e1',
      title: 'سُوْرَۃُ المُدَّثِّر',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 318,
    },
    {
      id: '75',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-075-muslimcentral.com.mp3?alt=media&token=af5fcdec-11b7-4bb7-8cc7-d23129968577',
      title: 'سُوْرَۃُ القِيَامَة',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 210,
    },
    {
      id: '76',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-076-muslimcentral.com.mp3?alt=media&token=4e2ff2ec-9e3c-4b47-bca7-9f20fda6e147',
      title: 'سُوْرَۃُ الإِنْسَان',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 312,
    },
    {
      id: '77',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-077-muslimcentral.com.mp3?alt=media&token=df5e06e4-0fe3-49d8-b1f3-aeaf07584914',
      title: '	سُوْرَۃُ المُرْسَلَات',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 300,
    },{
      id: '78',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-078-muslimcentral.com.mp3?alt=media&token=29bc8f6f-ef6c-4f03-93e2-b0c2df1bf7a9',
      title: 'سُوْرَۃُ النَّبَأ',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 294,
    },{
      id: '79',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-079-muslimcentral.com.mp3?alt=media&token=2f58ab82-a5e3-44ac-9d28-e16bbc9e2050',
      title: 'سُوْرَۃُ النَّازِعَات',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 250,
    },
    {
      id: '80',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-080-muslimcentral.com.mp3?alt=media&token=016f834c-0998-40b0-9685-1968f8edca9a',
      title: '	سُوْرَۃ عَبَسَ',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 210,
    },
    {
      id: '81',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-081-muslimcentral.com.mp3?alt=media&token=14b071b3-131a-4733-ae06-91ed2dce626b',
      title: 'سُوْرَۃُ التَّكْوِير',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 150,
    },
    {
      id: '82',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-082-muslimcentral.com.mp3?alt=media&token=ba4f04be-07ed-4fc7-8a88-73712dfdb37f',
      title: 'سُوْرَۃُ الإِنْفِطَار',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 138,
    },
   
    {
      id: '83',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-083-muslimcentral.com.mp3?alt=media&token=fb9ad62d-a890-4fda-90db-c955526a8829',
      title: 'سُوْرَۃُ المُطَفِّفِين',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 310,
    },
    {
      id: '84',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-084-muslimcentral.com.mp3?alt=media&token=d16767d7-475e-4564-bfaa-36989c05877c',
      title: 'سُوْرَۃُ الإِنْشِقَاق',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 150,
    },
    {
      id: '85',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-085-muslimcentral.com.mp3?alt=media&token=1d69eef0-b9d0-4482-80f8-7ab73fd72f20',
      title: 'سُوْرَۃُ البُرُوج',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 192,
    },
    
    {
      id: '86',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-086-muslimcentral.com.mp3?alt=media&token=626c818b-597e-42be-ada1-6b64bdcf790a',
      title: 'سُوْرَۃُ الطَّارِق',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 90,
    },
    {
      id: '87',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-087-muslimcentral.com.mp3?alt=media&token=fd7092f6-ac2c-41f0-a04e-49ae343d7c3d',
      title: 'سُوْرَۃُ الأَعْلَىٰ',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 100,
    },
    {
      id: '88',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-088-muslimcentral.com.mp3?alt=media&token=f415a5d2-1dab-4a04-ba46-f1f6dd327b2f',
      title: 'سُوْرَۃُ الغَاشِيَة',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 132,
    },
    {
      id: '89',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-089-muslimcentral.com.mp3?alt=media&token=2f47cad3-fd78-4593-9a44-7c664ab81e00',
      title: 'سُوْرَۃُ الفَجْر',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 210,
    },{
      id: '90',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-090-muslimcentral.com.mp3?alt=media&token=42a1d10f-4031-466d-bce9-49244c50f655',
      title: 'سُوْرَۃُ البَلَد',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 120,
    },
    {
      id: '91',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-091-muslimcentral.com.mp3?alt=media&token=013888b0-d62a-405e-9f00-f6cf47b89827',
      title: 'سُوْرَۃُ الشَّمْس',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 87,
    },
    {
      id: '92',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-092-muslimcentral.com.mp3?alt=media&token=b5eb3955-97e7-41c5-a851-f6cf6b68f4e1',
      title: 'سُوْرَۃُ اللَّيْل',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 111,
    },
    {
      id: '93',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-093-muslimcentral.com.mp3?alt=media&token=e452b2c1-c2fa-4a22-9c31-a16a7dc995e0',
      title: '	سُوْرَۃُ الضُّحَىٰ',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 65,
    },
    {
      id: '94',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-094-muslimcentral.com.mp3?alt=media&token=e3fca128-b3dd-4bb1-95f8-ba53d0e00c78',
      title: 'سُوْرَۃُ الشَّرْح',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 26,
    },{
      id: '95',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-095-muslimcentral.com.mp3?alt=media&token=9b303012-8ca1-4dd0-a24b-f256d156c6e4',
      title: 'سُوْرَۃُ التِّين',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 65,
    },{
      id: '96',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-096-muslimcentral.com.mp3?alt=media&token=f4309b61-6246-4150-95c9-59d696a917d0',
      title: 'سُوْرَۃُ العَلَق',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 90,
    },
    {
      id: '97',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-097-muslimcentral.com.mp3?alt=media&token=8fd36784-11ca-4ecc-aa78-6350d0076673',
      title: 'سُوْرَۃُ القَدْر',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 36,
    },
    {
      id: '98',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-098-muslimcentral.com.mp3?alt=media&token=3e166134-1c80-410b-9b34-855851db585a',
      title: 'سُوْرَۃُ البَيِّنَة',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 126,
    },
    {
      id: '99',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-099-muslimcentral.com.mp3?alt=media&token=774fa0cf-be05-4a94-903e-e6469c77f4ff',
      title: 'سُوْرَۃُ الزَّلْزَلَة',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 60,
    },
    {
      id: '100',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-100-muslimcentral.com.mp3?alt=media&token=a30f518e-57c9-498e-bad8-e5ac77be86c5',
      title: 'سُوْرَۃُ العَادِيَات',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 65,
    },
    {
      id: '101',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-101-muslimcentral.com.mp3?alt=media&token=717c06e6-190f-4e4d-a9f5-46e1e1a06d57',
      title: 'سُوْرَۃُ القَارِعَة',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 65,
    },{
      id: '102',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-102-muslimcentral.com.mp3?alt=media&token=a4986095-596c-4690-be47-a0a4bf4df6e6',
      title: 'سُوْرَۃُ التَّكَاثُر',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 65,
    },{
      id: '103',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-103-muslimcentral.com.mp3?alt=media&token=22c25fbd-5b4a-4b29-ae67-335058dfd80b',
      title: 'سُوْرَۃُ العَصْر',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 30,
    },
    {
      id: '104',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-104-muslimcentral.com.mp3?alt=media&token=f0745e6f-b74d-4aaa-bb96-884131c6704b',
      title: 'سُوْرَۃُ الهُمَزَة',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 60,
    },
    {
      id: '105',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-105-muslimcentral.com.mp3?alt=media&token=76487828-46cb-4813-b114-7cca54d602e4',
      title: 'سُوْرَۃُ الفِيل',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 50,
    },
    {
      id: '106',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-106-muslimcentral.com.mp3?alt=media&token=549cdb70-1694-4cba-8329-009ab1fa02ed',
      title: '	سُوْرَۃ قُرَيْش',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 43,
    },
    {
      id: '107',
      url:'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-107-muslimcentral.com.mp3?alt=media&token=b67b66dd-8298-475e-869e-6e2053840d0c',
      title: 'سُوْرَۃُ المَاعُون',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 58,
    },
    {
      id: '108',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-108-muslimcentral.com.mp3?alt=media&token=7827a72a-5c8a-4807-a502-d3ce6b9ef2b1',
      title: 'سُوْرَۃُ الكَوْثَر',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 25,
    },
    {
      id: '109',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-109-muslimcentral.com.mp3?alt=media&token=129b46f1-f3da-4143-9f05-e88298b10e27',
      title: 'سُوْرَۃُ الكَافِرُون',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 54,
    },{
      id: '110',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-110-muslimcentral.com.mp3?alt=media&token=adc5354a-2dc1-4aef-99a3-124fff45009f',
      title: 'سُوْرَۃُ النَّصْر',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 35,
    },{
      id: '111',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-111-muslimcentral.com.mp3?alt=media&token=374f2dda-6449-4082-9593-b48ca0416206',
      title: 'سُوْرَۃُ المَسَد',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 42,
    },
    {
      id: '112',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-112-muslimcentral.com.mp3?alt=media&token=eb244c61-7a51-4537-8128-e648cf85a72f',
      title: 'سُوْرَۃُ الإِخْلَاص',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 22,
    },
    {
      id: '113',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-113-muslimcentral.com.mp3?alt=media&token=99766fe3-9038-4c6e-a1af-f978a2cbdde4',
      title: 'سُوْرَۃُ الفَلَق',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 33,
    },
    {
      id: '114',
      url: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-114-muslimcentral.com.mp3?alt=media&token=dcd4e526-b80e-4392-91bc-4ad4f6b9a24d',
      title: 'سُوْرَۃُ النَّاس',
      artist: 'Quran Player',artwork: require('./assets/quran.jpg'),
      duration: 50,
    }
    
    
    
  ]);
  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
}
export async function playbackService() {
  
 
  TrackPlayer.addEventListener(Event.RemotePlay, () => {
    console.log('Event.RemotePlay');
    TrackPlayer.play();
  });
  TrackPlayer.addEventListener(Event.RemotePause, () => {
    console.log('Event.RemotePause');
    TrackPlayer.pause();
  });
  TrackPlayer.addEventListener(Event.RemoteNext, () => {
    console.log('Event.RemoteNext');
    TrackPlayer.skipToNext();
  });

  TrackPlayer.addEventListener(Event.RemotePrevious, () => {
    console.log('Event.RemotePrevious');
    TrackPlayer.skipToPrevious();
  });
}
