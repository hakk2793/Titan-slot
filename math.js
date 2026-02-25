const MathEngine = {

    weighted(){
        let total = CONFIG.SYMBOLS.reduce((a,b)=>a+b.weight,0);
        let r = Math.random()*total;
        let sum = 0;
        for(let s of CONFIG.SYMBOLS){
            sum+=s.weight;
            if(r<sum) return s;
        }
    },

    generateGrid(){
        let grid=[];
        for(let r=0;r<CONFIG.ROWS;r++){
            let row=[];
            for(let c=0;c<CONFIG.REELS;c++){
                row.push(this.weighted());
            }
            grid.push(row);
        }
        return grid;
    },

    calculateWin(grid,bet){
        let win=0;

        // orta satır payline
        let middle = grid[1];
        let first = middle[0];
        let matchCount=1;

        for(let i=1;i<middle.length;i++){
            if(middle[i].icon===first.icon){
                matchCount++;
            } else break;
        }

        if(matchCount>=3 && !first.scatter){
            win = bet * first.pay * matchCount;
        }

        return win;
    }
};
