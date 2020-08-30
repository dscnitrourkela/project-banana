const makeCard=async (username)=>{
    let htmlElement;
    await $.get("https://api.github.com/users/"+username,(userData)=>{
        htmlElement='<div class="col-md-6 col-lg-3 mb-4">'+
        '<div class="team-member">'+
        '<figure>'+
            '<img src="'+userData.avatar_url+'?size=400" alt="Image" class="img-fluid">'+
        '</figure>'+
        '<div class="p-3">'+
            '<a href="https://github.com/'+username+'"><h3>'+userData.name+'</h3></a>'+
            '<span class="position">'+userData.bio+'</span>'+
        '</div>'+
        '</div>'+
        '</div>'
    })
    

    return  htmlElement;
}

const  init= async ()=>{
    const profiles= JSON.parse(data);
    let profileList=[];
    await Promise.all(profiles.map(async (each)=>{
        const cardElement=await makeCard(each);
        profileList.push(cardElement);
    }));


    $("#team-section .row").html(profileList.join("\n"));
}


init();