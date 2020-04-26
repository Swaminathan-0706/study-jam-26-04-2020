const splitting = () => {
    let total = parseInt(document.querySelector('#total').value);
    console.log(total);
    let people = parseInt(document.querySelector('#people').value);
    console.log(typeof(people));
    let tipPercent = parseInt(document.querySelector('#tip').value);
    console.log(typeof(tipPercent));



    // let calcPercent = parseInt(tipPercent.value);
    // console.log(calcPercent);
    
    let totalWithTip = total + tipPercent ;
    console.log(totalWithTip);
    let final=totalWithTip/people;
    if(final>0){
        document.querySelector('#perPerson').innerHTML = `Money shared:Rs ${final}`;
    }
    else{
        document.querySelector('#perPerson').innerHTML = `No Money Spent`;
    }
    
}
// const splitBtn = document.querySelector('#cal')
// splitBtn.addEventListener('click', (e) => {
//             splitting();
//         });

        // document.querySelector('#reset').addEventListener('click', (e) => {
        //         e.preventDefault();
        //       document.querySelector('form').reset();
        //     });


            // const reset=()=>{
            //     document.querySelector('.insert').reset();
            // }

            // document.get
