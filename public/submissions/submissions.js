const makeCard=async (username)=>{
    let htmlElement;
    const USERNAME="dsc-nitr"
    const PASSWORD="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"
    await $.ajax
    ({
    type: "GET",
    url: "https://api.github.com/users/"+username,    
    headers: {
        "Authorization": "Basic " + btoa(USERNAME + ":" + PASSWORD)
    },
    success: (userData)=>{
        htmlElement='<div class="col-md-6 col-lg-3 mb-4">'+
        '<div class="team-member">'+
        '<figure>'+
            '<img src="'+userData.avatar_url+'?size=400" alt="Image" class="img-fluid">'+
        '</figure>'+
        '<div class="p-3">'+
            '<a href="https://github.com/'+username+'"><h3>'+username+'</h3></a>'+
            '<span class="position">'+userData.bio+'</span>'+
        '</div>'+
        '</div>'+
        '</div>'
    }
    });
    
    return  htmlElement;
}

const  init= async ()=>{
    const profiles= data;
    let profileList=[];
    await Promise.all(profiles.map(async (each)=>{
        const cardElement=await makeCard(each);
        profileList.push(cardElement);
    }));


    $("#team-section .row").html(profileList.join("\n"));
}


init();
