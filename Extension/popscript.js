window.onload=function()
{
	var rf = document.getElementById("refresh");
	rf.addEventListener("click", myFunction);
	var sb = document.getElementById("sea");
	sb.addEventListener("click", mysearch);
}

function myFunction()
{
	chrome.runtime.reload()
}

function mysearch()
{
	var searchbox = document.getElementById("sea");
	var text = document.getElementById("box");
	chrome.windows.create({"url": text.value, "incognito": true})	
}

var myArray = [
	"A check that does not bounce is called the Security Check. Do it every day before you leave!",
	"Do Your Part - Be Security Smart!",
	"Don't be Quick to Click. Be wary when you shop online.",
	"Passwords: Longer is Stronger with special characters.",
	"You wouldn't share your ATM pin, so why would you share your password?",
	"As you are online, so are the bad guys",
	"Gain visibility into your organization's cyber risk",
	"Security is not just computer science - it's a mindset",
	"The only firewall that protects against cyber criminals is your brain",
	"How do you protect our country from cyber-attacks? Start by protecting your own network",
	"Think before you click any link!!",
	"If you use the same password for everything, your life is probably about to change",
	"Use network firewalls",
	"Update software regularly",
	"Set strong passwords",
	"Use multi-factor authentication - Two-factor or multi-factor authentication is a best practice",
	"Employ device encryption",
	"Back up regularly",
	"Keep your hard drive clean",
	"Don't forget to protect your wireless network."
];

const randomItem = myArray[Math.floor(Math.random()*myArray.length)];

const quotes = document.getElementById('quotes');

quotes.innerHTML = randomItem;