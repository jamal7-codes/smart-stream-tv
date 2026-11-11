
export function renderChannels(channelsData) {

    
   const previewImage = document.getElementById("preview-image") 
   const previewTitle = document.getElementById("preview-title")

 const listcontainer = document.getElementById('channel-list');

 const listElement = document.createElement("ul")

listElement.className = "flex gap-3 w-max md:w-full md:flex-col";
 listcontainer.appendChild(listElement)

//  listcontainer.innerHTML = ""


 for (let channel of channelsData){

 
    const listItem = document.createElement("li")

//create logo
    const channelLogo = document.createElement('img')

    channelLogo.src =channel.logo;
    channelLogo.alt = channel.name;

     channelLogo.className = "w-10 h-12 object-contain"
 
console.log(channel)
const channelText = document.createElement("span")

    channelText.textContent = `${channel.channelNumber} - ${channel.name} `;

    listItem.className = "bg-[#202B45] hover:bg-[#7C5CFC] text-white p-4 rounded-lg cursor-pointer transition flex-shrink-0"

    listItem.dataset.id = channel.id;

    listItem.appendChild(channelText)
    listItem.appendChild(channelLogo)

    listElement.appendChild(listItem)


    listItem.addEventListener("click", () =>{

        previewImage.src = channel.previewImage
        previewTitle.textContent = channel.name
console.log(channel.previewImage)
    })
 }
    console.log("Total:", channelsData.length);


   


}
