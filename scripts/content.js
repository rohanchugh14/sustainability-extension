const article = document.querySelector("article");

const messages = {


    "clothing":
      {
        "messages": ["According to the World Resources Institute, it takes 2,700 liters of water to make one cotton shirt"],
        "link":"https://www.roadrunnerwm.com/blog/textile-waste-environmental-crisis"
      },
    
    "beauty":
      {
        "messages": ["It's estimated that the global beauty industry produces more than 120 million units of packaging each year, and packaging accounts for 70% of the industry's waste"],
        "link":"https://zerraco.com/blogs/zerra-blog/plastic-waste-and-environmental-impact-of-the-beauty-industry#:~:text=How%20much%20waste%20does%20the,created%20for%20the%20cosmetic%20industry"
      },
    
    "food":
      {
        "messages": ["Food production accounts for over a quarter (26%) of global greenhouse gas emissions"],
        "link":"https://ourworldindata.org/environmental-impacts-of-food?insight=food-plays-a-large-role-in-many-environmental-impacts#key-insights-on-the-environmental-impacts-of-food"
      },
    
    "toys":
      {
        "messages": ["In a test of 248 different toys, 92% were categorised as a \"serious risk\" due to the content of hazardous chemicals such as phthalates"],
        "link":"https://www.theworldcounts.com/challenges/consumption/other-products/environmental-impact-of-toys"
      },
    
    "furniture":
      {
        "messages": ["In 2018, the Environmental Protection Agency (EPA) found furniture accounted for more than 12 million tons of municipal waste in the United States"],
        "link":"https://brightly.eco/blog/fast-furniture-impact-on-environment"
      },
    
    "technology":
      {
        "messages": ["Globally, we are throwing away $62.5 bn of electronic waste every year"],
        "link":"https://www.trvst.world/environment/negative-impact-of-technology-on-the-environment/"
      },
    
    "misc":
     {
          "messages": ["Of the 86 million tons of plastic packaging produced globally each year, not even 14% is recycled","By 2050 there will be more plastic in the oceans than there are fish (by weight)", "The average person eats 70,000 microplastics each year"],
          "link":["https://earth.org/online-shopping-and-its-environmental-impact/","https://www.earthday.org/fact-sheet-plastics-in-the-ocean/", "https://givingcompass.org/article/10-facts-about-plastic-pollution-you-absolutely-need-to-know"]
    } 
    
    
    }

// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g; // Regular expression
  const words = text.matchAll(wordMatchRegExp);
  // matchAll returns an iterator, convert to array to get word count
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);
  const badge = document.createElement("p");
  // Use the same styling as the publish information in an article's header
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `⏱️ ${readingTime} min read`;

  // Support for API reference docs
  const heading = article.querySelector("h1");
  // Support for article docs with date
  const date = article.querySelector("time")?.parentNode;

  (date ?? heading).insertAdjacentElement("afterend", badge);

}

// const testhtml = '<!DOCTYPE html><html><head><meta charset="utf-8"><title>Popup</title><link rel="stylesheet" href="../css/popup.css"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body><div class="popup-container">Hi there this is a test</div></body></html>'


const elements = document.querySelectorAll('[aria-label="Review items and shipping"]');
console.log(elements)
const styleTag = document.createElement('style');
styleTag.innerHTML = `
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@500;700&display=swap');`;
document.head.appendChild(styleTag);
if(elements.length > 0){
    console.log("found")

    // const cont = document.createElement('div');
    // cont.style.position = "fixed"
    // cont.style.width = "32.5vw";
    // cont.style.height = "100vh";



    // const iframe = document.createElement('iframe');
    // iframe.src = chrome.runtime.getURL("../html/popup.html");
    // iframe.appendChild(cont);
    // document.body.appendChild(cont);
    // console.log("iframe", iframe)

    const myDiv = document.createElement('div');
    myDiv.style.display = 'flex';
    myDiv.style.flexDirection = 'column';
    myDiv.style.justifyContent = 'center';
    myDiv.style.alignItems = 'center';
    myDiv.style.boxSizing = 'border-box';
    myDiv.style.background = '#ffffff';
    myDiv.style.position = 'fixed';
    myDiv.style.top = '10px';
    myDiv.style.right = '10px';
    myDiv.style.width = '32.5vw';
    myDiv.style.zIndex = '999';
    myDiv.style.borderWidth = '15px 2px';
    myDiv.style.borderStyle = 'solid';
    myDiv.style.borderColor = '#74B4CF';
    myDiv.style.borderRadius = '15px';
    myDiv.style.padding = '15px';
    myDiv.id = "second-thought-popup";

    // create an img tag that is absolute positioned at top right for close button
    const closeImg = document.createElement('img');
    closeImg.src = chrome.runtime.getURL("../images/closeBtn.png");
    closeImg.style.position = 'absolute';
    closeImg.style.top = '10px';
    closeImg.style.right = '10px';
    closeImg.style.width = '20px';
    // add hover effect
    closeImg.style.cursor = 'pointer';
    // when clicked, remove myDiv
    closeImg.onclick = () => myDiv.remove();
    myDiv.appendChild(closeImg);



    const upperText = document.createElement('div');
upperText.style.fontFamily = "League Spartan";
upperText.style.fontStyle = 'normal';
upperText.style.fontWeight = '700';
upperText.style.fontSize = '32px';
upperText.style.lineHeight = '29px';
upperText.style.color = '#000000';
upperText.style.marginBottom = '10px';
upperText.style.marginTop = '10px';
upperText.style.textAlign = 'center';
upperText.innerHTML = "Um do you <span style=\"color:#0070A0;\">really</span> need that?";
myDiv.appendChild(upperText);
    document.body.appendChild(myDiv);

    const img = document.createElement('img');
    // make the img width 50% of the div
    img.style.width = '50%';
    img.style.marginBottom = '10px';
    const imgs = ["img1.jpg", "img2.jpg", "img3.png", "img4.png","img5.jpg","img6.jpg"];
    let randomImg = imgs[Math.floor(Math.random() * imgs.length)];
    img.src = chrome.runtime.getURL("../images/" + randomImg);
    // img.src = chrome.runtime.getURL("../images/test.jpg");
    myDiv.appendChild(img); 

    const lowerText = document.createElement('div');
    lowerText.style.fontFamily = "League Spartan";
    lowerText.style.fontStyle = 'normal';
    lowerText.style.fontWeight = '500';
    lowerText.style.fontSize = '30px';
    lowerText.style.lineHeight = '28px';
    lowerText.style.textAlign = 'center';
    lowerText.style.color = '#000000';

    // pick a random message in messages object
    let ind = Math.floor(Math.random() * Object.keys(messages).length);
    let key = Object.keys(messages)[ind];
    let msg = messages[key];
    let link = "";
    if(msg.messages.length > 1){
        let ind2 = Math.floor(Math.random() * msg.messages.length);
        lowerText.innerText = "\"" + msg.messages[ind2] + "\"";
        link = msg.link[ind2];
    } else {
        lowerText.innerText = "\"" + msg.messages[0] + "\"";
        link = msg.link;
    }
    // lowerText.innerText = "\"" + messages[key].messages[0] + "\"";
    myDiv.appendChild(lowerText);

    const lowerDiv = document.createElement('div');
    lowerDiv.style.display = 'flex';
    lowerDiv.style.flexDirection = 'row';
    lowerDiv.style.justifyContent = 'space-between';
    lowerDiv.style.alignItems = 'flex-end';
    lowerDiv.style.width = '100%';
    // lowerDiv.style.padding = '0 10px 10px 0';

    const learnMore = document.createElement('a');
learnMore.style.fontFamily = "'League Spartan'";
learnMore.style.fontStyle = 'normal';
learnMore.style.fontWeight = '500';
learnMore.style.fontSize = '20px';
learnMore.style.lineHeight = '18px';
learnMore.style.color = '#0070A0';
// learnMore.style.textDecoration = 'none';
// console.log("link", messages[key].link[0])

learnMore.href = link;
learnMore.target = "_blank";
// learnMore.addEventListener('click', () => {
//     chrome.runtime.sendMessage({type: "openNewTab", url: messages[key].link[0]});
// });
learnMore.innerText = "Learn More";
lowerDiv.appendChild(learnMore);

const logo = document.createElement('img');
logo.src = chrome.runtime.getURL("../images/logo.png");
lowerDiv.appendChild(logo);
myDiv.appendChild(lowerDiv);


    // const div = document.createElement('div');
    // div.innerHTML = testhtml;
    // document.body.appendChild(div);
    


    // let container = document.createElement('div')
    // container.style.position = "fixed"
    // container.style.height = "50px"
    // container.style.width = " 100px"
    // container.style.top = "0px"
    // container.style.right = "0px"
    // container.style.border = "1px solid black"
    // container.style.backgroundColor = "white"
    
    // let tmpDiv = document.createElement('div')
    // tmpDiv.innerHTML = "hello"
    
    // container.appendChild(tmpDiv)
    // document.body.appendChild(container)
}



// document.addEventListener("DOMContentLoaded", function() {
//     const updateHandler = (tabId, changeInfo, tab) => {
//         console.log('tabId', tabId)
//         console.log('changeInfo', changeInfo)
//         console.log('tab', tab)
//     }
  
//     chrome.tabs.onUpdated.addListener(updateHandler);
//   });
// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//     console.log("fired onUpdated")
//     if (changeInfo.url) {
//       // Do something when the URL changes
//       console.log('tabId', tabId)
//         console.log('changeInfo', changeInfo)
//         console.log('tab', tab)
//     } else {
//         // Do something else
//         console.log("no change")
//     }

//   });