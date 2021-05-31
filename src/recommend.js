import { MIN_SAFE_INTEGER, random } from 'core-js/core/number';

export let recommendedList = [];
let userInfo = {
    weight: 77,
    height: 179,
    sex = '남자',
    oneRM = { squat: 130, bench = 100, dead = 150 },
    weakness = "",
    proficiency = "",
};
let workoutHistory = [
    {
        date:"2021-05-20",
        mainTarget:"등",
        workouts:[
            {
                target: '등',
                kinds: '랫풀',
                sets: [
                    { reps: 10, weight: 60 }
                ]
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }]
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }]
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }]
            },
        ]
    },
    {
        date:"2021-05-20",
        mainTarget:"등",
        workouts:[
            {
                target: '등',
                kinds: '랫풀',
                sets: [
                    { reps: 10, weight: 60 }
                ]
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }]
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }]
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }]
            },
        ]
    },
    {
        date:"2021-05-22",
        mainTarget:"등",
        workouts:[
            {
                target: '등',
                kinds: '랫풀',
                sets: [
                    { reps: 10, weight: 60 }
                ]
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }]
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }]
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }]
            },
        ]
    },
    {
        date:"2021-05-23",
        mainTarget:"등",
        workouts:[
            {
                target: '등',
                kinds: '랫풀',
                sets: [
                    { reps: 10, weight: 60 }
                ]
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }]
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }]
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }]
            },
        ]
    },
    {
        date:"2021-05-25",
        mainTarget:"등",
        workouts:[
            {
                target: '등',
                kinds: '랫풀',
                sets: [
                    { reps: 10, weight: 60 }
                ]
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }]
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }]
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }]
            },
        ]
    },
    {
        date:"2021-05-27",
        mainTarget:"등",
        workouts:[
            {
                target: '등',
                kinds: '랫풀',
                sets: [
                    { reps: 10, weight: 60 }
                ]
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }]
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }]
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }]
            },
        ]
    },
    {
        date:"2021-05-30",
        mainTarget:"등",
        workouts:[
            {
                target: '등',
                kinds: '랫풀',
                sets: [
                    { reps: 10, weight: 60 }
                ]
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }]
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }]
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }]
            },
        ]
    },
];
let workouts = [{
        target: '하체',
        list: [
            { name: '바벨 백스쿼트', difficulty: 3 },
            { name: '컨벤셔널 데드리프트', difficulty: 3 },
            { name: '프론트 스쿼트', difficulty: 4 },
            { name: '브이 스쿼트', difficulty: 3 },
            { name: '스미스 런지', difficulty: 3 },
            { name: '불가리안 스쿼트', difficulty: 5 },
            { name: '레그 익스텐션', difficulty: 2 },
            { name: '레그 컬', difficulty: 2 },
            { name: '레그 프레스', difficulty: 2 },
            { name: '이너 타이 머신', difficulty: 2 },
            { name: '핵 스쿼트', difficulty: 3 },
            { name: '굿모닝 스쿼트', difficulty: 5 },
            { name: '힙 쓰러스트', difficulty: 3 },
        ]
    },
    {
        target: '가슴',
        list: [
            { name: '벤치프레스', difficulty: 3 },
            { name: '인클라인 벤치프레스', difficulty: 3 },
            { name: '디클라인 벤치 프레스', difficulty: 5 },
            { name: '덤벨 벤치프레스', difficulty: 3 },
            { name: '인클라인 덤벨 벤치프레스', difficulty: 3 },
            { name: '딥스', difficulty: 3 },
            { name: '체스트 프레스 머신', difficulty: 2 },
            { name: '덤벨 플라이', difficulty: 3 },
            { name: '팩 덱 플라이 머신', difficulty: 3 },
            { name: '케이블 플라이', difficulty: 3 },
            { name: '덤벨 풀 오버', difficulty: 5 },
            { name: '푸쉬업', difficulty: 1 }
        ]
    },
    {
        target: '등',
        list: [
            { name: '루마니안 데드리프트', difficulty: 3 },
            { name: '랫 풀 다운', difficulty: 2 },
            { name: '풀 업', difficulty: 2 },
            { name: '원 암 덤벨 로우', difficulty: 2 },
            { name: '바벨 로우', difficulty: 3 },
            { name: '티 바 로우', difficulty: 4 },
            { name: '케이블 롱 풀', difficulty: 3 },
            { name: '와이드 풀 다운', difficulty: 3 },
            { name: '스트레이트 암 풀 다운', difficulty: 4 },
            { name: '프론트 로우', difficulty: 4 },
            { name: '팬들레이 로우', difficulty: 5 }
        ],
    },
    {
        target: '어깨',
        list: [
            { name: '오버 헤드 프레스', difficulty: 3 },
            { name: '덤벨 숄더 프레스', difficulty: 2 },
            { name: '사이드 레터럴 레이즈', difficulty: 1 },
            { name: '벤트오버 레터럴 레이즈', difficulty: 2 },
            { name: '숄더 프레스 머신', difficulty: 2 },
            { name: '리버스 팩 덱 플라이', difficulty: 3 },
            { name: '케이블 페이스 풀 오버', difficulty: 4 },
            { name: '업라이트 로우', difficulty: 5 },
            { name: '케이블 레터럴 레이즈', difficulty: 4 },
            { name: '리버스 케이블 플라이', difficulty: 4 },
        ]
    },
    {
        target: '이두',
        list: [
            { name: '덤벨 컬', difficulty: 1 },
            { name: '이지바 컬', difficulty: 2 },
            { name: '케이블 푸쉬 다운', difficulty: 3 },
            { name: '프리처 컬', difficulty: 2 },
            { name: '케이블 컬', difficulty: 2 },
            { name: '라잉 트라이셉스 익스텐션', difficulty: 3 },
            { name: '해머 컬', difficulty: 3 },
        ],
    }
];



// function nextMainTarget(){
//     let nextMain="등"
//     //logic
//     //최근 기록 봐야되고, 이전 메인 타겟확인,
//     //case1: 최근 기록이 너무 오래전일때
//     //case2:
//     //logic
//     return nextMain
// }


function getSets(){
    sets:[]
    let reps=0;
    let weight=0;
    const max_set=5;
    for(var i=0;i<max_set;i++){
        reps=getReps();
        weight =getWeight();
        sets.append({reps,weight});
    }
    return sets;
}
function nextMainTarget(){
    let nextMain="등"

    function getFormatDate(date){
        var year = date.getFullYear();
        var month = (1+date.getMonth());
        mont = month >= 10?month:'0'+month;
        var day = date.getDate();
        day = day >=10?day:'0'+day;
        return year + '-'+ month+ '-' +day;
    }
    function lastWeek() {
        var d = new Date();
        var dayOfMonth = d.getDate();
        d.setDate(dayOfMonth - 7);
        return getFormatDate(d);
    }
    //최근 일주일 내에 운동을 했는지 체크
    let today = getFormatDate(new Date());
    let lastweek = lastWeek(new Date());
    
    const reversedHistory = workoutHistory.reverse();
    let idx=0;
    let count = 0;
    let latest='';
    let freq={
        chest=0,
        leg=0,
        back=0
    }
    reversedHistory.forEach((history)=>{
        if(idx>7 & count===0){
            break;
        }
        if(history.date<today & history.date > lastweek)
        {
            count++;
            if(count===1){
                latest = history.mainTarget;
            }
            if(history.mainTarget==="가슴"){
                freq.chest++;
            }else if(history.mainTarget==="등"){
                freq.back++;
            }else if(history.mainTarget==="하체"){
                freq.leg++;
            }
        }
        idx++;
    });
    //가슴->등->하체 순서
    //가장 많이한 것 제외
    //case 1: 최근 일주일 내에 운동을 하지 않았을 때
    if(count===0){
        //가슴 등 하체
        if(userInfo.weakness==="가슴"||userInfo.weakness==="등"||userInfo.weakness==="하체"){
            nextMain=userInfo.weakness
        }else{
            nextMain="가슴"
        }
    }
    //case 2: 최근 일주일 내에 운동을 했을 때
    else{
        //최근 운동이 있을 때
        //case 1: 빈도가 같을 때 -> case 1-1: 전날 했던 것 제외하고 다음 것 or 약점 부위
        //case 2: 빈도가 다를 때 -> 최하 빈도 부위
        if(freq.back===freq.chest && freq.back==freq.chest){
            //빈도가 모두 같을 때
            if(latest === userInfo.weakness){
                if(latest==="가슴" & userInfo.weakness){
                    if(userInfo.sex==="여자"){
                        if(freq.chest - freq.back >2 | freq.chest - freq.leg){

                        }
                    }
                    else{

                    }
                    
                }
            }
        }
        
    }

    return nextMain;
}
function getWorkout(target, difficulty, proficiency){
    //랜덤으로 숙련도와 그에 따른 적합한 운동 난이도를 따져서 운동을 뽑는다.
    let workout={};

    //--------- logic ----------


    sets=getSets(target);
}
function nextMainTarget() {
    let nextMain = "등"
        //logic

    //logic
    return nextMain
}

function getSets() {
    sets: []
    const max_set = 5;
    for (var i = 0; i < max_set; i++) {
        switch (nextTarget) {
            case '하체':
                oneRM = userInfo.oneRM[0]
                break
            case '가슴':
                oneRM = userInfo.oneRM[1]
                break
            case '등':
                oneRM = userInfo.oneRM[2]
                break
        }
    }

}

function checkFreq() {

}

function getWorkout(target, difficulty, proficiency) {
    //랜덤으로 숙련도와 그에 따른 적합한 운동 난이도를 따져서 운동을 뽑는다.
    let workout = {};

    //--------- logic ----------

    sets = getSets();

    //--------- logic ----------
    return workout;
}

function makeList() {
    let maxNum
    let nextMain = nextMainTarget();
    let list = [];
    //logic

    //return 만들어진 운동 리스트
    return list;
}
export function recommend(value) {
    recommendedList = makeList();
    console.log(recommendeList);
    return recommendedList;
}