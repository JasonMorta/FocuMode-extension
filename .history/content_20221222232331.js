/* 
You can use the chrome.scripting API to inject JavaScript and CSS into websites.
This is similar to what you can do with content scripts,
but by using the chrome.scripting API,
extensions can make decisions at runtime. 
*/

//You can use the target parameter to specify a target to inject JavaScript or CSS into.
//The only required field is tabId. By default, an injection will run in the main frame of the specified tab.

const tabId = getTabId();
chrome.scripting.executeScript(
    {
      target: {tabId: tabId},
      files: ['script.js'],
    },
    () => {  });