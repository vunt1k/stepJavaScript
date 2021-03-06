async function Halo() {
    let res = await fetch(`https://poloniex.com/public?command=returnCurrencies`);
    let json = await res.json();
    
    let str = JSON.stringify(json);
    console.log(str);
    let obj = JSON.parse(str);
    console.log(obj);    

    let i = 1;
    let o = 0;

    for (property in obj) {
        let tr = '<tr >';
        tr += '<th scope="row">';
        tr += i;
        tr += '</th>';
        tr += '<td id="snameProp">' + property + '</td>';
        i += 1;                   
        for(prop in obj[property]){
            o += 1;
            if( o === 2){
                tr += '<td class = "fname">' + obj[property][prop] + '</td>';
                console.log('Halo');
                continue;
            }
            tr += '<td>' + obj[property][prop] + '</td>';
            if(o === 6){
                break;
            };            
        };
        o = 0;
        tr += `<td><button type="button" class="btn btn-light">Delete ${property}</button></td>`;    
        tr += '</tr>';
        $('#painting > tbody:last-child').append(tr);
    }

    $('button').click(function(){
        console.log($(this));
        let $this = $(this);
        let str = $(this).text();
        let deleted = str.split([' ']);  

        console.log(deleted[1]);

        for (property in obj) {
            if(property == deleted[1]){
                console.log("Halo");
                delete property[deleted[1]];
                console.log(property);
                break;
            }                            
        }
        
        $(this).parents('tr').remove();
    }); 

    $(function(){
        $("#myInput").on("keyup", function() {
          let value = $(this).val().toLowerCase();
          $("#painting tr").filter(function() {
            $(this).toggle($(this).children('.fname').text().toLowerCase().indexOf(value) > -1);
            console.log($(this).text());
          });
        });
    });

}

Halo();
