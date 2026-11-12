
export function renderChannels(channelsData) {

 
 
     
   const previewImage = document.getElementById("preview-image") 
   const previewTitle = document.getElementById("preview-title")

 const listcontainer = document.getElementById('channel-list');

 listcontainer.innerHTML = ""

 const listElement = document.createElement("ul")

listElement.className = "flex gap-3 w-max md:w-full md:flex-col";
 listcontainer.appendChild(listElement)



 channelsData.forEach((channel)=>{

 
    const listItem = document.createElement("li")

//create logo
    const channelLogo = document.createElement('img')

    channelLogo.src =channel.logo;
    channelLogo.alt = channel.name;

     channelLogo.className = "w-10 h-12 object-contain"
 
 const channelText = document.createElement("span")

    channelText.textContent = `${channel.channelNumber} - ${channel.name} `;

    listItem.className = "bg-[#202B45] hover:bg-[#7C5CFC] text-white p-4 rounded-lg cursor-pointer transition flex-shrink-0"

    listItem.dataset.id = channel.id;

    listItem.appendChild(channelText)
    listItem.appendChild(channelLogo)

    listElement.appendChild(listItem)


    listItem.addEventListener("click", () =>{

       listElement.querySelectorAll("li").forEach((item) => {
        item.classList.remove("bg-purple-600");
        item.classList.add("bg-[#202B45]");
    });

    // Highlight clicked channel
    listItem.classList.remove("bg-[#202B45]");
    listItem.classList.add("bg-purple-600");

        previewImage.src = channel.previewImage
        previewTitle.textContent = channel.name
     })

  

})
   
 

}



