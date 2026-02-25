const UI = {

    render(grid){
        const reels=document.getElementById("reels");
        reels.innerHTML="";

        for(let r=0;r<CONFIG.ROWS;r++){
            for(let c=0;c<CONFIG.REELS;c++){
                let div=document.createElement("div");
                div.className="cell";
                div.innerText=grid[r][c].icon;
                reels.appendChild(div);
            }
        }
    },

    updateStats(state){
        document.getElementById("balance").innerText=state.balance;
        document.getElementById("vip").innerText=state.vip;
    }
};

UI.updateStats(Engine.state);
