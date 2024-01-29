const adviceSlipApiEndpoint = 'https://api.adviceslip.com/advice'
const slipTitle = document.getElementById('slip-title')
const slipAdvice = document.getElementById('slip-advice')


// Create function to get data from an api by passing endpoint as argument
async function getData(endpoint){
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
}

getData(adviceSlipApiEndpoint).then((data) => {
    console.log(data.slip.id)
    slipTitle.innerHTML = `
    Advice #${data.slip.id}
    `
    slipAdvice.innerHTML = `
    "${data.slip.advice}"
    `
})