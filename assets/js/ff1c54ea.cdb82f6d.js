"use strict";(self.webpackChunkredback_documentation=self.webpackChunkredback_documentation||[]).push([[7946],{6422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var i=n(4848),a=n(8453);const s={sidebar_position:9},o="Two Factor Authentication Bypass",r={id:"cybersecurity/research/2fa-bypass",title:"Two Factor Authentication Bypass",description:"Progress of 2FA in Redback",source:"@site/docs/cybersecurity/research/2fa-bypass.md",sourceDirName:"cybersecurity/research",slug:"/cybersecurity/research/2fa-bypass",permalink:"/redback-documentation/docs/cybersecurity/research/2fa-bypass",draft:!1,unlisted:!1,editUrl:"https://github.com/Redback-Operations/redback-documentation/blob/main/docs/cybersecurity/research/2fa-bypass.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Wazuh Rules and Decoders",permalink:"/redback-documentation/docs/cybersecurity/research/wazuh-rules"},next:{title:"Major Areas of Redback to be Monitored",permalink:"/redback-documentation/docs/cybersecurity/research/major-areas"}},c={},h=[{value:"Introduction",id:"introduction",level:2},{value:"What is 2FA?",id:"what-is-2fa",level:2},{value:"Bypassing two-factor authentication",id:"bypassing-two-factor-authentication",level:2},{value:"Man in the middle attack (MitM) using Evilginx2",id:"man-in-the-middle-attack-mitm-using-evilginx2",level:3},{value:"Monitor URL",id:"monitor-url",level:3},{value:"Universal 2<sup>nd</sup> Factor",id:"universal-2nd-factor",level:3},{value:"Pass the Cookie",id:"pass-the-cookie",level:3},{value:"Using HTTPS",id:"using-https",level:3},{value:"Secure Cookies",id:"secure-cookies",level:3},{value:"SMS Based Man in the Middle (MitM)",id:"sms-based-man-in-the-middle-mitm",level:3},{value:"Using Additional Authentication",id:"using-additional-authentication",level:3},{value:"Attack on Hard and Soft Tokens",id:"attack-on-hard-and-soft-tokens",level:3},{value:"Defense",id:"defense",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"two-factor-authentication-bypass",children:"Two Factor Authentication Bypass"}),"\n",(0,i.jsx)(t.p,{children:"Progress of 2FA in Redback"}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Author:"})," Melvin Manoj"]})}),"\n",(0,i.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(t.p,{children:"The purpose of the document is to demonstrate the progress of two-factor authentication for Redback\r\nOperations from the previous trimesters. It consists of demonstrating vulnerability testing with evidence,\r\non ways to bypass the two-factor authentications. Moreover, this document compiles all the evidence\r\nand research on vulnerabilities to give the next trimester students detailed implications of the projects\r\nand further advice on how to improve the two-factor authentication process. My role was to gather all\r\nthe relevant documents and deliverables from the previous trimester and work on the progress to test\r\nthe two-factor authentication find vulnerabilities and create a detailed document showcasing the\r\nvulnerabilities and ways to improve these in the next trimester. This handover document will consist of:"}),"\n",(0,i.jsx)(t.h2,{id:"what-is-2fa",children:"What is 2FA?"}),"\n",(0,i.jsx)(t.p,{children:"Redback operations have decided to implement 2FA two-factor authentication as an additional layer of\r\nsecurity to ensure that only the users who are entitled to their accounts can access them. Traditional\r\nauthentication relies on single-factor authentication, however, 2FA adds an extra step of security to the\r\nlogin process by requiring a second authentication method to verify the authentication. The common\r\ntypes of 2FA include:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"SMS or Email Codes"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Authentication apps"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Hardware Tokens"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Biometric Authentication"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Push notifications"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"QR code"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Each has its advantages and disadvantages. This document will discuss ways that 2FA can be bypassed\r\nand the vulnerabilities that need to be resolved for the next trimester."}),"\n",(0,i.jsx)(t.h2,{id:"bypassing-two-factor-authentication",children:"Bypassing two-factor authentication"}),"\n",(0,i.jsx)(t.h3,{id:"man-in-the-middle-attack-mitm-using-evilginx2",children:"Man in the middle attack (MitM) using Evilginx2"}),"\n",(0,i.jsx)(t.p,{children:"Most phishing techniques are used by attackers who clone the login interface page and host it on their\r\nweb server to gain access to the credentials. However, that can't always give the attackers access to the\r\n2FA access code. Evilginx2 is a phishing tool that performs MitM attacks against websites that use two-\r\nfactor authentication. It acts as a proxy connecting to 2FA-protected sites and acting as a passthrough\r\nfrom the victim -> server as shown in the illustration below:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"2FA passthrough",src:n(4998).A+"",width:"780",height:"246"})}),"\n",(0,i.jsx)(t.p,{children:"Evilginx2 acts as a proxy which means the user will see the contents of the site as exactly as they would\r\nwhen they visit the actual site. So the victim will see the login page for redback operations just as it\r\nwould normally be. Attackers generate a phishing link and on successful sign-in from the victim the link\r\nwill redirect the victim. The victim can receive this link via any available communication such as email,\r\nmessenger, etc. The victim clicks on the link and will be presented with the Evilginx proxied sign-in page.\r\nAfter the victim enters the credentials to sign in, they will be redirected to the URL specified by the rc\r\nparameter. The rd cookie is saved for the domain in the victim's browser. From now on, if the cookie is\r\npresent, the victim will be redirected to rc URl, when the phishing link is re-opened. Ultimately, attackers\r\nnow have the victims' email and password, as well as session cookies that now can be imported into the\r\nattackers' browser to gain full access to the logged-in session, bypassing any two-factor authentication\r\nenabled on the victims' account."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"2FA tokens",src:n(456).A+"",width:"624",height:"130"})}),"\n",(0,i.jsx)(t.p,{children:"Evilginx2 can configure the files named \u2018phishlets\u2019 that are plain text rulesets in YAML format. These files\r\ndirect which subdomains are needed to proxy a specific site, which cookies to capture, and which page\r\nto redirect the victim and capture their credentials. In the image above we can see Evilgenx2 has\r\ncaptured the user credentials and all the tokens are intercepted. This lets the attack hijack the user\r\nsession using the authorized session tokens, using a cookie manager, and logging in without entering the\r\nusername and password."}),"\n",(0,i.jsx)(t.h3,{id:"monitor-url",children:"Monitor URL"}),"\n",(0,i.jsx)(t.p,{children:"The users need to be aware of the URL of the domain they are attempting to sign into. Redback\r\nOperations needs to train the staff and users to avoid damage. Users need to be trained on social\r\nengineering attacks and be careful what links they are clicking on."}),"\n",(0,i.jsxs)(t.h3,{id:"universal-2nd-factor",children:["Universal 2",(0,i.jsx)("sup",{children:"nd"})," Factor"]}),"\n",(0,i.jsx)(t.p,{children:"Universal 2 factors are hardware keys that have a clear security mechanism inbuilt where it will not issue\r\na 2FA token if the domain does not match the legit domain"}),"\n",(0,i.jsx)(t.h3,{id:"pass-the-cookie",children:"Pass the Cookie"}),"\n",(0,i.jsx)(t.p,{children:"User authentication information is stored by cookies in the web application, which lets the user stay\r\nsigned in instead of logging in multiple times. Pass the cookie works in a way once the user has already\r\nlogged on by verifying the 2FA a browser cookie is created and stored for the web session. The attack can\r\nthen extract the right browser cookies, they can then access as another user in a separate web browser\r\nsession on another system using the cookies to bypass the authentication via MFA."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"2FA auth",src:n(4964).A+"",width:"780",height:"457"})}),"\n",(0,i.jsxs)(t.p,{children:["Name",":Melvin"," Manoj\r\nID:219187067\r\nUniversal 2 factors are hardware keys that have a clear security mechanism inbuilt where it will not issue\r\na 2FA token if the domain does not match the legit domain.\r\nPass the Cookie\r\nUser authentication information is stored by cookies in the web application, which lets the user stay\r\nsigned in instead of logging in multiple times. Pass the cookie works in a way once the user has already\r\nlogged on by verifying the 2FA a browser cookie is created and stored for the web session. The attack can\r\nthen extract the right browser cookies, they can then access as another user in a separate web browser\r\nsession on another system using the cookies to bypass the authentication via MFA."]}),"\n",(0,i.jsx)(t.p,{children:"The attacker first extracts the cookies using this command:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'mimikatz.exe privilege::debug log "dpapi::chrome\r\n/in:%localappdata%googlechromeUSERDA~1defaultcookies /unprotect" exit\n'})}),"\n",(0,i.jsx)(t.p,{children:"The attacker can then use the stolen cookies to inspect the stolen session by opening Chrome on\r\nanother server and using the \u2018inspect\u2019 interface to insert a cookie. The attacker can navigate to pass the\r\ncookies to hijack the session and refresh the page. The attack then has access to the user account using\r\nthe cookies that have already authenticated 2FA. The attack now can use the stolen web session to\r\nimpersonate the victim user to access unauthorized data."}),"\n",(0,i.jsx)(t.h3,{id:"using-https",children:"Using HTTPS"}),"\n",(0,i.jsx)(t.p,{children:"Encryption data transmission between user and browser using HTTPS can prevent attackers from\r\nintercepting sensitive information such as session cookies."}),"\n",(0,i.jsx)(t.h3,{id:"secure-cookies",children:"Secure Cookies"}),"\n",(0,i.jsx)(t.p,{children:"Secure Flag and HttpOnly flag ensure that the cookie is sent over HTTPS only and prevents JavaScript\r\nfrom accessing the cookie. Ultimately making it difficult for the attacker to steal the session cookie."}),"\n",(0,i.jsx)(t.h3,{id:"sms-based-man-in-the-middle-mitm",children:"SMS Based Man in the Middle (MitM)"}),"\n",(0,i.jsx)(t.p,{children:"Attacks use an SMS MITM attack to gain unauthorized access to alter SMS messages between two\r\nparties. Attacks can use social engineering to trick phone companies into swapping SIMs then they can\r\ngain access to the SMS-based two-factor authentication for the victim as they are receiving all the SMS\r\nmessages to the attack's phone without the victim realizing it. This attack takes control of the phone\r\nnumber and now has access to the 2FA code that is sent. This attack can bypass the OTP one-time\r\npassword sent to the user by SMS as the attacker has access to the phone number. Moreover, once the\r\nattacker can reroute the messages they can also gain access to other accounts that phone number."}),"\n",(0,i.jsx)(t.h3,{id:"using-additional-authentication",children:"Using Additional Authentication"}),"\n",(0,i.jsx)(t.p,{children:"Using app-based 2FA or hardware tokens rather than relying on the SMS-based 2FA will create additional\r\nsecurity for the user."}),"\n",(0,i.jsx)(t.h3,{id:"attack-on-hard-and-soft-tokens",children:"Attack on Hard and Soft Tokens"}),"\n",(0,i.jsx)(t.p,{children:"While software tokens like Google Authenticator or RSA\u2019s SecureID Authenticate are generally considered\r\nsecure, the nature of BYOD means organizations still have to worry about malware on the phones\r\nthemselves. They generate a TOTP-based one-time password, the user has to download another app\r\nsuch as Microsoft Authenticator, Google Authenticator, etc, which produces a TOTP that the user has to\r\nenter to gain access after providing their credentials. These codes usually generate codes that are 6 digits\r\nlong and refresh after every 30 seconds. This method is more secure than all the options discussed\r\nabove, however, if the attacker gains access to the phone, they have access to the code and then can\r\ngain access to the account. Moreover, if the victim clicks on the phishing link that mimics the real\r\nwebsite, the victim will provide the login and TOTP on the fake website which then the attacker can use\r\non the real website to gain access to your account."}),"\n",(0,i.jsx)(t.h3,{id:"defense",children:"Defense"}),"\n",(0,i.jsx)(t.p,{children:"Avoid phishing links that are sent by email or SMS. The user needs to be aware of the risks of data\r\nbreaches and needs to be informed about what the real website links should look like."}),"\n",(0,i.jsx)(t.p,{children:"Moreover, we can use TOTP codes that are longer than 6 digits to help against brute force attacks, as the\r\nlonger code will not give the attacks enough time to use brute force attack, as the password will reset in\r\n30 seconds."}),"\n",(0,i.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(t.p,{children:"To conclude this report we have discussed the different ways the attackers can bypass the two-factor\r\nauthentication to gain unauthorized access to the user account. The attackers can use Evilginx2, pass the\r\ncookie hijack, SIM-based man-in-the-middle attack, and brute force attack. The document covers each\r\nattack and how it can be a risk to the company and user data. I have discussed how the cyber security\r\nteam and defend against these attacks. The document helps train the users and the cyber security team\r\nto understand the potential attacks. furthermore, it helps the cyber security team to come up with\r\nsolutions and ways to prevent data breaches against these attacks."}),"\n",(0,i.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://m0chan.github.io/2019/07/26/Bypassing-2FA-For-Fun-With-Evilginx2.html",children:"https://m0chan.github.io/2019/07/26/Bypassing-2FA-For-Fun-With-Evilginx2.html"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://breakdev.org/evilginx-advanced-phishing-with-two-factor-authentication-bypass/",children:"https://breakdev.org/evilginx-advanced-phishing-with-two-factor-authentication-bypass/"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://medium.com/@OWN_team/analysis-and-detection-of-mitm-phishing-attacks-bypassing-2fa-",children:"https://medium.com/@OWN_team/analysis-and-detection-of-mitm-phishing-attacks-bypassing-2fa-"}),"\r\no365-use-case-cf0ffdae9cae"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://blog.netwrix.com/2022/11/29/bypassing-mfa-with-pass-the-cookie-attack/",children:"https://blog.netwrix.com/2022/11/29/bypassing-mfa-with-pass-the-cookie-attack/"})})]})}function l(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},4964:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/2fa-auth-e25f80a2bb3c8edf15705d011726344e.jpg"},4998:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/2fa-passthrough-bf7cec9ab170af8b76e53224101c0251.jpg"},456:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/2fa-tokens-67aa00f6f2849d16bed3dd0642beca2e.jpg"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var i=n(6540);const a={},s=i.createContext(a);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);