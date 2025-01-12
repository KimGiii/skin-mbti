const qnaList = [
  {
    q: '세수를 한 뒤 보습제나 자외선 차단제를 사용하지 않으면 당신의 얼굴 피부는?',
    a: [
      { answer: 'A.매우 건조한 느낌이 들거나 갈라진다.', type: ['4', '5', '6', '7', '8', '9', '10', '11'] },
      { answer: 'B.약간 건조한 느낌이 든다. ', type: ['4', '5', '6', '7', '8', '9', '10', '11'] },
      { answer: 'C.윤기가 나며 보습제가 필요하다고 느낀 적이 없다.', type: ['0', '1', '2', '3', '12', '13', '14', '15'] },
      { answer: 'D.탱탱한 느낌이다.', type: ['0', '1', '2', '3', '12', '13', '14', '15'] },
      { answer: 'E.잘 모르겠다.', type: ['0', '1', '2', '3', '12', '13', '14', '15'] },
    ]
  },
  {
    q: '거울을 볼 때 얼굴에 핀 끝 크기 이상의 모공이 얼마나 많이 보이나요?',
    a: [
      { answer: 'A.없다.', type: ['4', '5', '6', '7', '8', '9', '10', '11'] },
      { answer: 'B.이마, 코, 턱에만 약간 있다.', type: ['4', '5', '6', '7', '8', '9', '10', '11'] },
      { answer: 'C.많다.', type: ['0', '1', '2', '3', '12', '13', '14', '15'] },
      { answer: 'D.대단히 많다.', type: ['0', '1', '2', '3', '12', '13', '14', '15'] },
      { answer: 'E.잘 모르겠다.', type: ['4', '5', '6', '7', '8', '9', '10', '11'] },
    ]
  },
  {
    q: '거품이 많이 발생하는 비누를 사용하면 당신의 얼굴 피부는 어떻게 되나요?',
    a: [
      { answer: 'A.건조한 느낌이거나갈라진다.', type: ['4', '5', '6', '7', '12', '13', '14', '15'] },
      { answer: 'B.약간 건조한 느낌이 들지만, 갈라지지는 않는다.', type: ['4', '5', '6', '7', '12', '13', '14', '15'] },
      { answer: 'C.정상적인 느낌이다.', type: ['0', '1', '2', '3', '8', '9', '10', '11'] },
      { answer: 'D.기름이 흐르는 듯한 느낌이다.', type: ['0', '1', '2', '3', '8', '9', '10', '11'] },
      { answer: 'E.비누나 폼클렌저를 사용하지 않는다.', type: ['4', '5', '6', '7', '12', '13', '14', '15'] },
    ]
  },
  {
    q: '평소에 보습제를 여러번 덧바르지 않으면 얼굴 피부가 당기는 느낌입니까?',
    a: [
       { answer: 'A.항상 그렇다.', type: ['4', '5', '6', '7', '12', '13', '14', '15'] },
       { answer: 'B.때때로 그렇다.', type: ['4', '5', '6', '7', '12', '13', '14', '15'] },
       { answer: 'C.거의 그렇지 않다.', type: ['0', '1', '2', '3', '8', '9', '10', '11'] },
       { answer: 'D.전혀 그렇지 않다.', type: ['0', '1', '2', '3', '8', '9', '10', '11'] },
    ]
  },
  {
    q: '얼굴에는 작은 여드름, 블랙헤드 또는 화이트헤드가 생기나요?',
    a: [
      { answer: 'A.전혀 없다.', type: ['4', '5', '6', '7', '8', '9', '10', '11'] },
      { answer: 'B.거의 없다.', type: ['4', '5', '6', '7', '8', '9', '10', '11'] },
      { answer: 'C.때때로 있다.', type: ['0', '1', '2', '3', '12', '13', '14', '15'] },
      { answer: 'D.항상 있다.', type: ['0', '1', '2', '3', '12', '13', '14', '15'] },
    ]
  },

  {
    q: '얼굴의 이마와 코에 기름기는 어떤가요?',
    a: [
      { answer: 'A.전혀 기름지지 않다.', type: ['4', '5', '6', '7', '8', '9', '10', '11'] },
      { answer: 'B.거의 기름지지 않다.', type: ['4', '5', '6', '7', '8', '9', '10', '11'] },
      { answer: 'C.가끔 기름진다.', type: ['0', '1', '2', '3', '12', '13', '14', '15'] },
      { answer: 'D.항상 기름진다.', type: ['0', '1', '2', '3', '12', '13', '14', '15'] },
    ]
  },
  {
    q: '보습제를 바르고 2~3시간 이후에 양 볼은 어떤가요?',
    a: [
      { answer: 'A.매우 거칠거나, 피부가 당기고 벗겨진다.', type: ['4', '5', '6', '7', '8', '9', '10', '11'] },
      { answer: 'B.약간 윤기가 흐른다.', type: ['0', '1', '2', '3', '12', '13', '14', '15'] },
      { answer: 'C.윤기가 흐르고 번들거린다.', type: ['0', '1', '2', '3', '12', '13', '14', '15'] },
      { answer: 'D.약간 건조하거나 아무렇지 않다.', type: ['4', '5', '6', '7', '8', '9', '10', '11'] },
    ]
  },
  {
    q: '얼굴에 붉은 화농성(고름) 여드름이 발생한 경험이 있나요?',
    a: [
      { answer: 'A.전혀 없다.', type: ['0', '1', '2', '3', '8', '9', '10', '11'] },
      { answer: 'B.거의 없다.', type: ['0', '1', '2', '3', '8', '9', '10', '11'] },
      { answer: 'C.최소한 1개월에 1회 있다.', type: ['4', '5', '6', '7', '12', '13', '14', '15'] },
      { answer: 'D.최소한 1주일에 1회 있다.', type: ['4', '5', '6', '7', '12', '13', '14', '15'] },
    ]
  },
  {
    q: '피부 화장품(클렌저, 보습제, 색조화장품 등)이 얼굴 피부에 여드름을 유발하거나 가려움증, 불은 발진, 따끔거리는 증상을 유발한 적 있나요?',
    a: [
      { answer: 'A.전혀 없다.', type: ['0', '1', '2', '3', '8', '9', '10', '11'] },
      { answer: 'B.거의 없다.', type: ['0', '1', '2', '3', '8', '9', '10', '11'] },
      { answer: 'C.자주 있다.', type: ['4', '5', '6', '7', '12', '13', '14', '15'] },
      { answer: 'D.항상 있다.', type: ['4', '5', '6', '7', '12', '13', '14', '15'] },
      { answer: 'E.얼굴에 화장품을 쓰지 않는다.', type: ['0', '1', '2', '3', '8', '9', '10', '11'] },
    ]
  },
  {
    q: '자외선 차단제를 바르면 피부가 가렵거나, 뜨겁거나 발진이 생긴 경험이 있나요?',
    a: [
      { answer: 'A.전혀 없다.', type: ['0', '1', '2', '3', '8', '9', '10', '11'] },
      { answer: 'B.거의 없다.', type: ['0', '1', '2', '3', '8', '9', '10', '11'] },
      { answer: 'C.자주 있다.', type: ['4', '5', '6', '7', '12', '13', '14', '15'] },
      { answer: 'D.항상 있다.', type: ['4', '5', '6', '7', '12', '13', '14', '15'] },
      { answer: 'E.자외선 차단제를 바르지 않는다.', type: ['4', '5', '6', '7', '12', '13', '14', '15'] },
    ]
  },
  {
    q: '본인이 생각하기에, 약간만 햇빛을 봐도 사람들이 햇볕에 탔냐고 물어보나요?',
    a: [
      { answer: 'A.전혀 아니다.', type: ['1', '2', '4', '6', '9', '14', '15', '11'] },
      { answer: 'B.때때로 그렇다.', type: ['1', '2', '4', '6', '9', '14', '15', '11'] },
      { answer: 'C.자주 그렇다.', type: ['0', '3', '5', '7', '8', '10', '12', '13'] },
      { answer: 'D.항상 그렇다.', type: ['0', '3', '5', '7', '8', '10', '12', '13'] },
      { answer: 'E.나는 항상 햇볕에 의해 탄 상태이다.', type: ['0', '3', '5', '7', '8', '10', '12', '13'] },
    ]
  },
  {
    q: '여드름 혹은 피부 속을 파고 들어간 모발에 의해 짙은 갈색이나 검은색 침착이 생긴 적 있나요?',
    a: [
      { answer: 'A.전혀 생기지 않는다.', type: ['1', '2', '4', '6', '9', '14', '15', '11'] },
      { answer: 'B.때때로 생긴다.', type: ['1', '2', '4', '6', '9', '14', '15', '11'] },
      { answer: 'C.자주 생긴다.', type: ['0', '3', '5', '7', '8', '10', '12', '13'] },
      { answer: 'D.항상 생긴다.', type: ['0', '3', '5', '7', '8', '10', '12', '13'] },
      { answer: 'E.여드름이나 피부속으로 파고 들어간 모발이 전혀 없다.', type: ['1', '2', '4', '6', '9', '14', '15', '11'] },
    ]
  },
   {
    q: '외상 후에 갈색(분홍색은 아님)의 상처 자국이 피부에 얼마나 오래 존재하나요?',
    a: [
      { answer: 'A.전혀 생기지 않는다.', type: ['1', '2', '4', '6', '9', '14', '15', '11'] },
      { answer: 'B.1주일', type: ['1', '2', '4', '6', '9', '14', '15', '11'] },
      { answer: 'C.수주', type: ['0', '3', '5', '7', '8', '10', '12', '13'] },
      { answer: 'D.수개월', type: ['0', '3', '5', '7', '8', '10', '12', '13'] },
      { answer: 'E.잘 모르겠다.', type: ['1', '2', '4', '6', '9', '14', '15', '11'] },
    ]
  },
   {
    q: '윗입술이나 두 뺨에 짙은 점이나 반점이 있나요? 혹은 과거에 제거한 경험이 있나요?',
    a: [
      { answer: 'A.없다.', type: ['1', '2', '4', '6', '9', '14', '15', '11'] },
      { answer: 'B.잘 모르겠다.', type: ['1', '2', '4', '6', '9', '14', '15', '11'] },
      { answer: 'C.약간 알아볼 수 있을정도로 있었거나 현재 가지고 있다.', type: ['0', '3', '5', '7', '8', '10', '12', '13'] },
      { answer: 'D.잘 알아볼 수 있을정도로 있었거나 현재 가지고 있다.', type: ['0', '3', '5', '7', '8', '10', '12', '13'] },
    ]
  },
   {
    q: '여러 날 동안 연속해서 태양에 노출되면 어떤일이 일어났나요?',
    a: [
       { answer: 'A.햇볕에 타고 물집이 생겼으나, 피부색은 변하지 않는다.', type: ['1', '2', '4', '6', '9', '14', '15', '11'] },
       { answer: 'B.피부가 약간 짙어졌다.', type: ['1', '2', '4', '6', '9', '14', '15', '11'] },
       { answer: 'C.피부가 많이 짙어졌다.', type: ['0', '3', '5', '7', '8', '10', '12', '13'] },
       { answer: 'D.피부가 이미 짙어서, 더 짙어졌는지 구분하기 어렵다.', type: ['0', '3', '5', '7', '8', '10', '12', '13'] },
       { answer: 'E.잘 모르겠다.', type: ['1', '2', '4', '6', '9', '14', '15', '11'] },
    ]
  },
   {
    q: '얼굴에 주름이 있나요?',
    a: [
      { answer: 'A.없다. 웃거나 찡그리거나 눈썹을 치켜올릴 경우에도 없다.', type: ['0', '1', '4', '7', '10', '11', '12', '15'] },
      { answer: 'B.웃거나 찡그리거나 눈썹을 치켜올릴때에 있다.', type: ['0', '1', '4', '7', '10', '11', '12', '15'] },
      { answer: 'C.있다. 얼굴을 움직이거나 움직임이 없는 안정된 상태에서도 약간 있다.', type: ['2', '3', '5', '6', '8', '9', '13', '14'] },
      { answer: 'D.웃거나 찡그리거나 눈썹을 치켜올리지 않아도 주름이 있다.', type: ['2', '3', '5', '6', '8', '9', '13', '14'] },
    ]
  },
  {
    q: '어머니의 얼굴피부는 얼마나 나이들어 보이나요/보였나요?',
    a: [
      { answer: 'A.나이보다 5~10년 젊어보인다/보였다.', type: ['0', '1', '4', '7', '10', '11', '12', '15'] },
      { answer: 'B.나이대로 보인다/보였다.', type: ['0', '1', '4', '7', '10', '11', '12', '15'] },
      { answer: 'C.나이보다 5년더 늙어보인다/보였다.', type: ['2', '3', '5', '6', '8', '9', '13', '14'] },
      { answer: 'D.나이보다 5년이상 더 늙어보인다/보였다.', type: ['2', '3', '5', '6', '8', '9', '13', '14'] },

    ]
  },
  {
    q: '아버지의 얼굴피부는 얼마나 나이들어 보이나요/보였나요?',
    a: [
      { answer: 'A.나이보다 5~10년 젊어보인다/보였다.', type: ['0', '1', '4', '7', '10', '11', '12', '15'] },
      { answer: 'B.나이대로 보인다/보였다.', type: ['0', '1', '4', '7', '10', '11', '12', '15'] },
      { answer: 'C.나이보다 5년더 늙어보인다/보였다.', type: ['2', '3', '5', '6', '8', '9', '13', '14'] },
      { answer: 'D.나이보다 5년이상 더 늙어보인다/보였다.', type: ['2', '3', '5', '6', '8', '9', '13', '14'] },

    ]
  },
  {
    q: '외할아버지의 얼굴피부는 얼마나 나이들어 보이나요/보였나요?',
    a: [
      { answer: 'A.나이보다 5~10년 젊어보인다/보였다.', type: ['0', '1', '4', '7', '10', '11', '12', '15'] },
      { answer: 'B.나이대로 보인다/보였다.', type: ['0', '1', '4', '7', '10', '11', '12', '15'] },
      { answer: 'C.나이보다 5년더 늙어보인다/보였다.', type: ['2', '3', '5', '6', '8', '9', '13', '14'] },
      { answer: 'D.나이보다 5년이상 더 늙어보인다/보였다.', type: ['2', '3', '5', '6', '8', '9', '13', '14'] },

    ]
  },
  {
    q: '친할아버지의 얼굴피부는 얼마나 나이들어 보이나요/보였나요?',
    a: [
      { answer: 'A.나이보다 5~10년 젊어보인다/보였다.', type: ['0', '1', '4', '7', '10', '11', '12', '15'] },
      { answer: 'B.나이대로 보인다/보였다.', type: ['0', '1', '4', '7', '10', '11', '12', '15'] },
      { answer: 'C.나이보다 5년더 늙어보인다/보였다.', type: ['2', '3', '5', '6', '8', '9', '13', '14'] },
      { answer: 'D.나이보다 5년이상 더 늙어보인다/보였다.', type: ['2', '3', '5', '6', '8', '9', '13', '14'] },

    ]
  }
]

const infoList = [
  {
    name: '<ORPT>',
    desc: 'ORPT는 다른 피부타입에 비해 주름과 자극에 강한 편이지만, 햋빛에 민감한 피부 타입 입니다.' ,
    context: '<관리방법> <br> ORPT타입은 자외선에 민감하므로 자외선 차단제를 필수적으로 사용해야 합니다. 특히, 건조한 피부가 아니기 때문에 사용감이 가벼운 선크림이 좋습니다. <br> 피부톤을 위해서는 나이아신아마이드 또는 비타민 C와 비타민E가 같이 함유된 제품을 사용하는 것이 좋습니다. 의사의 진단에 따라 하이드로퀴논도 사용할 수 있습니다. '
  },
  {
    name: '<ORNT>',
    desc: 'ORNT는 이상적인 피부타입 입니다. 피지량에 따라 보습제 사용이 필요 없을 수도 있습니다.',
    context : ' <관리방법> <br> ORNT타입은 피지때문에 블랙헤드와 화이트헤드 같은 문제가 발생할 수 있습니다. <br> 이를 없애기 위해 물리적 필링 스크럽 또는 강한 알칼리성 세정제보단 BHA, PHA사용을 권장합니다. BHA와 PHA는 화학적 각질 제거제로 농도에 따라 효과와 자극이 커지므로, 낮은 농도부터 시작해야 합니다. <br> 피부에 너무 강한 자극이 지속되면 ORPT의 피부타입이 OSPT로 바뀔 수 있으므로 주의해야 합니다. 의사의 진단에 따라 피지분비가 많은 부위에 아다팔렌이 함유된 의약품을 사용할 수 있습니다.'
  },
  {
    name: '<ORNW>',
    desc: 'ORNW는 자극과 햋빛에 민감한 피부는 아니지만, 주름이 있는 피부타입 입니다.',
    context : '<관리방법> <br> ORNW타입은 햋빛에 민감하지 않지만, 자외선이 주름을 발생하기 때문에 사용감이 가벼운 자외선 차단제를 사용해야 합니다. '
  },
  {
    name: '<ORPW>',
    desc: 'ORPW는 자극에는 강하지만, 다른 피부 타입보다 햇빛과 주름에 취약합니다.',
    context : '<관리방법> <br> ORPW타입은 다른 피부타입보다 더 많이 자외선차단제를 사용해야 합니다. 햇빛에 의해 주름이 잘 생기기 때문에, 주름 예방을 위한  자외선차단제 사용과 밤에 레티노이드 함유가 된 화장품, 의약품인 스티바 A를 발라주는 것이 좋습니다. 또, 낮에는 비타민 C와E가 같이 함유된 제품을 바르는 것이 좋습니다.'
  },
  {
    name: '<DSNT>',
    desc: 'DSNT는 주름에는 비교적 안전하지만, 건조하고 피부 문제가 생기는 피부타입 입니다.',
    context : '<관리방법> <br> DSNT타입은 약산성 타입의 폼클렌징 사용이 좋습니다. 특히, 강한 세정력을 가진 비누나 폼클렌징은 Ph가 알칼리성을 띄고 있어서 사용을 자제해야 합니다. 피부 건조에 의해 염증이 발생할 수 있기 때문에, 피부를 건조하지 않게 하는 것이 좋으며, 너무 과한 보습은 오히려 피부의 자극을 일으킬 수 있습니다. 당기지 않을 정도의 보습관리, 만약, 염증이 심하다면 전문의약품인 아다팔렌이 함유된 디페린을 사용할 수 있습니다. 하지만, 피부 트러블에게 있어서 자외선차단제 사용은 해가 될 수 있기 때문에, 피부 트러블 해결이 우선 되어야 합니다. '
  },
  {
    name: '<DSPW>',
    desc: 'DSPW는 건조, 민감, 색소성, 주름 같은 문제를 지속적인 관리를 통해 피부타입을 바꿔야합니다.',
    context : '<관리방법> <br> DSPW타입은 피부 염증을 예방하기 위해 BHA, AHA의 잦은 사용, 그리고 강한 세정력을 가진 폼클렌징 사용보다 피부의 빠른 각질 탈락과 생성을 위한 전문의약품 아다팔렌이 함유된 디페린 사용이 좋습니다. 하지만, 먼저 약산성 타입의 폼클렌징과 적절한 보습관리, 그리고 자외선차단제 사용이 잘 이루어져야 합니다. 하지만, 피부 트러블에게 있어서 자외선차단제 사용은 해가 될 수 있기 때문에, 피부 트러블 해결이 우선 되어야 합니다. 피부 염증을 해결하고자 BHA와 AHA, PHA의 잦은 사용은 오히려 트러블과 건조를 초래하므로 낮은 농도에서부터의 시작, 효과에 따라 농도를 높이거나, 다른 의약품을 사용해야 합니다. '
  },
  {
    name: '<DSNW>',
    desc: 'DSNW는 건조하면서 민감하고 주름에 있는 피부입니다. 관리를 통해 민감한 피부와 주름을 개선해 나갈 수 있습니다. ',
    context : '<관리방법> <br>DSNW타입은 피부 염증을 예방하기 위해 BHA, AHA의 잦은 사용, 그리고 강한 세정력을 가진 폼클렌징 사용보다 피부의 빠른 각질 탈락과 생성을 위한 전문의약품 아다팔렌이 함유된 디페린 사용이 좋습니다. 하지만, 먼저 약산성 타입의 폼클렌징과 적절한 보습관리, 그리고 자외선차단제 사용이 잘 이루어져야 합니다. 하지만, 피부 트러블에게 있어서 자외선차단제 사용은 해가 될 수 있기 때문에, 피부 트러블 해결이 우선 되어야 합니다. 피부 염증을 해결하고자 BHA와 AHA, PHA의 잦은 사용은 오히려 트러블과 건조를 초래하므로 낮은 농도에서부터의 시작, 효과에 따라 농도를 높이거나, 다른 의약품을 사용해야 합니다.'
  },
  {
    name: '<DSPT>',
    desc: 'DSPT는 햇빛에 강하지만, 건조하면서 민감한 피부입니다. 이 피부타입은 관리를 통해 S를 R로 바꿔야 합니다.',
    context : '<관리방법> <br>  DSPT타입은 피부 건조에 의해 트러블이 발생할 수 있습니다. 적당한 보습과 약산성 타입의 폼클렌징 사용이 이루어져야 합니다. 과한 촉촉한 보습, 두꺼운 보습은 피부에 오히려 자극을 일으킬 수 있기 때문에 당기지 않을 정도의 보습이 제일 좋습니다. 피부 트러블을 해결하기 위해 다양한 여드름성 제품을 사용하기 보다 스티바 A보다 자극이 약한 전문의약품 디페린 사용을 추천합니다. 각질제거제 AHA와 BHA, PHA 모두 잘 사용하면 좋은 제품이므로 이 중 하나를 골라 낮은 농도에서부터 시작하는 것도 좋습니다. 단, 디페린과 ,각질제거제는 같이 사용해서는 안됩니다. '
  },
  {
    name: '<DRPW>',
    desc: 'DRPW는 자극에 강해서 피부트러블이 잘 생기지 않지만, 주름과 건조에 취약한 피부입니다. ',
    context : '<관리방법> <br>  일단, 주름의 예방을 위해 자외선차단제 사용은 필수여야 합니다. 이 피부타입은 피부가 건조하기 때문에, 약산성 타입의 폼클렌징 사용과 적당한 보습이 이루어져야 합니다. 과하게 촉촉하거나 두꺼운 보습은 피부의 자극을 일으키므로 당기지 않을 정도의 보습이 좋습니다. 또한, 주름의 감소를 위해 밤에 전문의약품인 스티바 A를 처방해 바르거나, 레티노이드 함유 제품을 사용하는 것이 좋습니다.'
  },
  {
    name: '<DRNW>',
    desc: 'DRNW는 자극에 강하지만, 햇빛에 취약한 피부입니다.',
    context : '<관리방법> <br> 일단, DRNW타입은 햇빛에 취약하기 때문에, 무조건 자외선 차단제 사용이 이루어져야 합니다. 또한, 피부가 건조하다고 해서 너무 촉촉하거나 두꺼운 보습은 피부의 자극을 일으킬 수 있습니다. 당기지 않을 정도의 적당한 보습이 가장 좋습니다. 낮의 햇빛을 막기위해, 자외선차단제 사용 전 비타민 C와E가 함유된 제품을 바르면 좋습니다. '
  },
  {
    name: '<DRPT>',
    desc: 'DRPT는 자극에 강하고 주름이 없는 편이지만, 색소침착과 건조를 예방 또는 해결해야하는 피부입니다.',
    context : '<관리방법> <br> D타입은 피부가 건조한 편이여서 주름이 비교적 O타입에 비해 잘 생기므로 자외선차단제 사용은 필수입니다. 색소침착 해결을 위해 AHA를 사용할 수 있으나, 잦은 AHA와 같은 각질제거제 사용은 R타입을 S타입으로 바꿀 수 있기 때문에, 낮은 농도부터 시작해야 합니다. 만약, 강한 미백을 원한다면 의약성분인 하이드로퀴논까지 사용할 수 있습니다. '
  },
  {
    name: '<DRNT> DRNT',
    desc: 'DRNT는 비교적 깨끗한 피부타입일 확률이 높습니다. 적당한 보습관리만 이루어지면 좋은 피부타입 입니다.',
    context : '<관리방법> <br> D타입, 즉 피부건조는 염증과 햇빛에 의한 주름이 생길 수 있기 때문에, 꾸준한 자외선차단제 사용과 당기지 않을 정도의 적당한 보습관리가 되야 합니다. 노화를 생각해서 전문의약품인 스티바 A사용도 좋습니다. 단, 부작용은 생길 수 있습니다. '
  },
  {
    name: '<OSPT>',
    desc: 'OSPT는 피지 분비량에 의해 피부트러블이 발생하거나 발생할 수 있는 피부입니다. 피부 트러블과 색소침착을 해결하는 관리를 해야합니다.',
    context : '<관리방법> <br> OSPT피부 타입은 피지 분비량을 조절하기 위해서 보통 많이 사용하는 각질제거제인 BHA를 사용할 수 있습니다. 하지만, 잦은 사용으로 인해 피부를 더 민감하고 피부 트러블을 더 만들 수 있기 때문에 적정량의 사용을 권합니다. 피부 트러블이 심각하면 아다팔렌성분이 함유된 디페린 또는 벤조일퍼옥사이드성분이 함유된 제품을 사용할 수 있습니다. 이 제품은 각각 사용할 수도 있으며 같이 사용할 수 있습니다. 단, 두 제품 모두 피부자극이 있습니다. 만약, 벤조일과 디페린 성분으로 피부트러블이 해결되지 않는다면, 먹는 약 이소티논을 의사에게 처방받아 먹어야합니다. '
  },
  {
    name: '<OSPW>',
    desc: 'OSPW는 피지 분비량에 의해 피부트러블이 발생하거나 발생할 수 있는 피부입니다. 피부 트러블과 주름, 색소침착 을 해결하는 관리를 해야합니다. ',
    context : '<관리방법> <br> OSPW피부 타입은 피지 분비량을 조절하기 위해서 보통 많이 사용하는 각질제거제인 BHA를 사용할 수 있습니다. 하지만, 잦은 사용으로 인해 피부를 더 민감하고 피부 트러블을 더 만들 수 있기 때문에 적정량의 사용을 권합니다. 피부 트러블이 있다면 아다팔렌성분이 함유된 디페린 또는 벤조일퍼옥사이드성분이 함유된 제품을 사용할 수 있습니다. 이 제품은 각각 사용할 수도 있으며 같이 사용할 수 있습니다. 단, 두 제품 모두 피부자극이 있습니다. 만약, 벤조일과 디페린 성분으로 피부트러블이 해결되지 않는다면, 먹는 약 이소티논을 의사에게 처방받아 먹어야합니다. 주름을 예방하기 위해 자외선차단제 사용이 좋지만, 피부트러블에게 있어서는 해가 될 수 있기 때문에 적절한 균형이 필요합니다. '
  },
  {
    name: '<OSNW>',
    desc: 'OSNW는 피지 분비량에 의해 피부트러블이 발생하거나 발생할 수 있는 피부입니다. 피부 트러블과 주름을 해결하는 관리를 해야합니다.',
    context : '<관리방법> <br>OSNW피부 타입은 피지 분비량을 조절하기 위해서 보통 많이 사용하는 각질제거제인 BHA를 사용할 수 있습니다. 하지만, 잦은 사용으로 인해 피부를 더 민감하고 피부 트러블을 더 만들 수 있기 때문에 적정량의 사용을 권합니다. 피부 트러블이 심각하면 아다팔렌성분이 함유된 디페린 또는 벤조일퍼옥사이드성분이 함유된 제품을 사용할 수 있습니다. 이 제품은 각각 사용할 수도 있으며 같이 사용할 수 있습니다. 단, 두 제품 모두 피부자극이 있습니다. 만약, 벤조일과 디페린 성분으로 피부트러블이 해결되지 않는다면, 먹는 약 이소티논을 의사에게 처방받아 먹어야합니다. 주름을 예방하기 위해 자외선차단제 사용이 좋지만, 피부트러블에게 있어서는 해가 될 수 있기 때문에 적절한 균형이 필요합니다.  '
  },
  {
    name: '<OSNT>',
    desc: 'OSNT는 피지분비에 의해 피부트러블이 잘 생기는 피부타입 입니다. 관리를 통해 S를 R로 바꾸는, 피부 트러블이 생기지 않도록 노력해야 합니다.',
    context : '<관리방법> <br>  OSNT피부 타입은 피지 분비량을 조절하기 위해서 보통 많이 사용하는 각질제거제인 BHA를 사용할 수 있습니다. 하지만, 잦은 사용으로 인해 피부를 더 민감하고 피부 트러블을 더 만들 수 있기 때문에 적정량의 사용을 권합니다. 피부 트러블이 심각하면 아다팔렌성분이 함유된 디페린 또는 벤조일퍼옥사이드성분이 함유된 제품을 사용할 수 있습니다. 이 제품은 각각 사용할 수도 있으며 같이 사용할 수 있습니다. 단, 두 제품 모두 피부자극이 있습니다. 만약, 벤조일과 디페린 성분으로 피부트러블이 해결되지 않는다면, 먹는 약 이소티논을 의사에게 처방받아 먹어야합니다. 주름을 예방하기 위해 자외선차단제 사용이 좋지만, 피부트러블에게 있어서는 해가 될 수 있기 때문에 적절한 균형이 필요합니다. '
  },
]
