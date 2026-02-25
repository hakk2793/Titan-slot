const Engine = {

    state: Storage.load(),

    spin(){
        if(this.state.balance < CONFIG.BET) return alert("Yetersiz bakiye");

        this.state.balance -= CONFIG.BET;
        this.state.jackpot += CONFIG.BET*0.1;

        let grid = MathEngine.generateGrid();
        UI.render(grid);

        let win = MathEngine.calculateWin(grid, CONFIG.BET);

        if(win>0){
            this.state.balance += win;
            this.state.xp += win/100;
        }

        this.levelCheck();
        Storage.save(this.state);
        UI.updateStats(this.state);
    },

    levelCheck(){
        let need = this.state.vip * 100;
        if(this.state.xp >= need){
            this.state.vip++;
            this.state.xp=0;
        }
    }
};
