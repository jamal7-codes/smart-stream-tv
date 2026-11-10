
export function renderChannels(channelsData) {

 const listcontainer = document.getElementById('channel-list');

 const listElement = document.createElement("ul")

 listElement.className = "flex md:flex-col gap-3 w-full"

 listcontainer.appendChild(listElement)

 for (let channel of channelsData){
    const listItem = document.createElement("li")
console.log(channel)
    listItem.textContent = `${channel.channelNumber} - ${channel.name}`;

    listItem.className = "b-[#202B45] hover:bg-[#7C5CFC] text-white p-4 rounded-lg cursor-pointer transition flex-shrink-0"
    listItem.id = channel.id;

    listElement.appendChild(listItem)
 }
    


}
