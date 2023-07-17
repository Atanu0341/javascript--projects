let a = [
  "Initializing Hack tool...",
  "Connecting to Instagram...",
  "Connecting to server 1...",
  "Connection failed. Retrying...",
  "Connecting to server 2",
  "Connected Successfully...",
  "Username d_e_b_j_i_t_559...",
  "Trying Brute Force...",
  "200K passwords tried...",
  "Match not found",
  "Another 200K passwords tried...",
  "Match not found...",
  "Another 200K passwords tried...",
  "Match not found...",
  "Another 200K passwords tried...",
  "Match found...",
  "Accessing Account...",
  "Hack Successful...",
];


const sleep=async(seconds)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve(true)},seconds*1000)
    })
}

const showHack=async(messages)=>{
    await sleep(2)
    // console.log(messages)
    text.innerHTML = text.innerHTML + messages + "<br>"
}

(async () => {
    for (let i = 0; i < a.length; i++) {
            await showHack(a[i])
    }
})()