function closeAllTabsHandler(activity) 
{
	chrome.tabs.query({active: true,currentWindow: true}, tabs => {
        tabs.forEach(tab => {
            chrome.tabs.remove(tab.id);
        });
	});
}
chrome.extension.onRequest.addListener(function(prediction){
    if (prediction==1)
	{
		var confirm_result = confirm("Warning: Malicious website detected !! \nDo you want to close?");
		if (confirm_result) 
		{
			closeAllTabsHandler(confirm_result)
		}	
	}
	else if (prediction==-1){
        alert("Website is SAFE");
    }
});

