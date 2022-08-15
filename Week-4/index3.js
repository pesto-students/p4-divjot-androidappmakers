const text=document.getElementById("text");
const button=document.getElementById("button");

if(button){
    button.addEventListener("click",clickHandler);

}

const getNumber=()=>
    new Promise((res,rej)=>{
        const randomNumber=parseInt(Math.random()*100,10);
        setTimeout(()=>{
            if(randomNumber%5===0){
                rej(`Rejected with num: ${randomNumber}`);
            }
            res(`Resolved with num: ${randomNumber}`);

        },randomNumber*10);
    });


const clickHandler=()=>{
    display("Loading...");
    const numberPromise=getNumber();
    numberPromise.then(display).catch(display);
};

const display=(content)=>{
    text.innerText=content;
}



const CustomPromiseState= {
    PENDING:"PENDING",
    RESOLVED:"RESOLVED",
    REJECTED:"REJECTED"
}

class CustomPromise {
    constructor(fn){
        this.CustomPromiseState=CustomPromiseState.PENDING;
        this.resolver=this.resolver.bind(this);
        this.rejector=this.rejector.bind(this);
        this.thenFns=[];
        this.catchFn=null;
        this.resolvedData=null;
        fn(this.resolver,this.rejector);
    }

    resolver(resolvedData) {
        if(!this.CustomPromiseState === this.CustomPromiseState.PENDING) {
            return;
        }
        this.CustomPromiseState=CustomPromiseState.RESOLVED;
        while(this.thenFns.length){
            const thenFn=this.thenFns.shift();
            this.resolverData=thenFn(this.resolvedData||resolvedData);
        
        }
    }
    rejector(rejectedData){
        if(this.CustomPromiseState===this.CustomPromiseState.PENDING){
            this.catchFn && this.catchFn(rejectedData);
        }
        this.CustomPromiseState=this.CustomPromiseState.REJECTED;
    }
    then(thenFn){
        this.thenFns.push(thenFn);
        return this;
    }
    catch(catchFn){
        this.catchFn=catchFn;
        return this;
    }
}