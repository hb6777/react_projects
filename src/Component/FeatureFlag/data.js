
 const dummyAPIdata = {
    showHexRgb : true,
    showAutoComplete: true,
    showStarRating : true,
    showTicTakToe : true 
 };
  
function featureFlagDataServiceCall(){ 
    return new Promise((resolve, reject)=>{
        if (dummyAPIdata) setTimeout(resolve(dummyAPIdata), 200);
        else reject('error here ...')
    }); 
}

export default featureFlagDataServiceCall;

// https://medium.com/@sharareshaddev/understanding-promises-in-javascript-and-their-use-in-react-a77564aae576#:~:text=In%20React%2C%20Promises%20are%20commonly,Promises%20in%20a%20React%20component.














