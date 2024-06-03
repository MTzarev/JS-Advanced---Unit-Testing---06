let {expect} = require(`chai`);
let rgbToHexColor = require(`./rgbToHexColor.js`)


describe (`rgbToHex`, ()=>{
it (`convert black to hex`,() =>{
    expect(rgbToHexColor(0,0,0)).to.equal(`#000000`)
})



})
