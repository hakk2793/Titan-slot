const Storage = {
    load(){
        return JSON.parse(localStorage.getItem("titanEngine")) || {
            balance:100000,
            vip:1,
            xp:0,
            jackpot:500000
        };
    },
    save(data){
        localStorage.setItem("titanEngine",JSON.stringify(data));
    }
};
