
'open just dial .com @@ hightlight id_;_65802_;_script infofile_;_ZIP::ssf26.xml_;_
SystemUtil.Run "chrome.exe","https://www.justdial.com/"

wait(4)
'entering search location as chennai and waiting for 5 seconds so the search string can be entered effectively
Browser("Justdial - Local Search,").Page("Justdial - Local Search,").Link("Chennai").Click @@ script infofile_;_ZIP::ssf62.xml_;_
wait(5)
 @@ script infofile_;_ZIP::ssf61.xml_;_
 ' after 5 seconds of wait Car Wash Services is searched along with high ratings 
Browser("Justdial - Local Search,").Page("Justdial - Local Search,_2").WebEdit("Search for anything, anywhere").Set "Car Wash Services" @@ script infofile_;_ZIP::ssf58.xml_;_
Browser("Justdial - Local Search,").Page("Justdial - Local Search,_2").WebButton("WebButton").Click @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Justdial - Local Search,").Page("Top 100 Car Washing Services").Link("Ratings").Click
Browser("Top 100 Car Washing Services").Page("Top 100 Car Washing Services").WebEdit("name").Set "" @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Top 100 Car Washing Services").Page("Top 100 Car Washing Services").WebElement("X").Click @@ script infofile_;_ZIP::ssf11.xml_;_

wait(4)

'display 5 car washing services name . The first 5 car washing services are captured and displayed in data table in global sheet @@ hightlight id_;_65802_;_script infofile_;_ZIP::ssf27.xml_;_
 @@ hightlight id_;_65802_;_script infofile_;_ZIP::ssf45.xml_;_
Browser("Top 100 Car Washing Services").Page("Top 100 Car Washing Services_2").Output CheckPoint("first car wash service") @@ script infofile_;_ZIP::ssf51.xml_;_
Browser("Top 100 Car Washing Services").Page("Top 100 Car Washing Services_2").Output CheckPoint("second car wash") @@ script infofile_;_ZIP::ssf52.xml_;_
Browser("Top 100 Car Washing Services").Page("Top 100 Car Washing Services_2").Output CheckPoint("3rd car wash") @@ script infofile_;_ZIP::ssf53.xml_;_
Browser("Top 100 Car Washing Services").Page("Top 100 Car Washing Services_2").Output CheckPoint("4th car wash") @@ script infofile_;_ZIP::ssf54.xml_;_
Browser("Top 100 Car Washing Services").Page("Top 100 Car Washing Services_2").Output CheckPoint("5th car wash") @@ script infofile_;_ZIP::ssf55.xml_;_

wait(4)
 'now in order to capture error message invalid  pphone number is used and the error message is captured using text checkpoint
Browser("Top 100 Car Washing Services").Page("Top 100 Car Washing Services_2").Link("Free Listing").Click @@ script infofile_;_ZIP::ssf14.xml_;_
Browser("Top 100 Car Washing Services").Page("Free Listing - Just Dial").WebEdit("cn").Set "Chennainorthpackers " @@ script infofile_;_ZIP::ssf15.xml_;_
Browser("Top 100 Car Washing Services").Page("Free Listing - Just Dial").WebEdit("fname").Set "Team Three" @@ script infofile_;_ZIP::ssf16.xml_;_
Browser("Top 100 Car Washing Services").Page("Free Listing - Just Dial").WebEdit("lname").Set "Hackathon" @@ script infofile_;_ZIP::ssf17.xml_;_
Browser("Top 100 Car Washing Services").Page("Free Listing - Just Dial").WebEdit("mn[]").Set "9845" @@ script infofile_;_ZIP::ssf18.xml_;_
Browser("Top 100 Car Washing Services").Page("Free Listing - Just Dial").WebButton("Submit").Click @@ script infofile_;_ZIP::ssf19.xml_;_

'THE DISPLAYED ERROR MESSAGE IS VERIFIED USING CHECK POINT.
Browser("Top 100 Car Washing Services").Page("Free Listing - Just Dial").WebElement("fmb0Err").Output CheckPoint("fmb0Err")


'After error message is captured now iit is navigated to home screen and under fitness tab ---> gyms ----> submenu items. 
'gym is selected and stored in a form of list in global sheet which is printed to show various types of gym options
Browser("Top 100 Car Washing Services").Page("Free Listing - Just Dial").Sync
Browser("Top 100 Car Washing Services").Back
Browser("Top 100 Car Washing Services").Page("Top 100 Car Washing Services").Link("Link").Click @@ script infofile_;_ZIP::ssf22.xml_;_
Browser("Top 100 Car Washing Services").Page("Justdial - Local Search,").Link("Fitness").Click @@ script infofile_;_ZIP::ssf23.xml_;_
Browser("Top 100 Car Washing Services").Page("Fitness in Chennai, India").Link("Gym").Click

wait(4)
''display sub menu items in store
Dim submenu
Set submenu=Description.Create
submenu("micclass").value="WebElement"
Set submenulist=Browser("Justdial - Local Search,").Page("List of Gym in Chennai,").WebElement("24 Hours Gyms All Options").ChildObjects(submenu)

print "******SUB MENU ITEMS IN FITNESS******"

print "-----List of Items in GYM-----"

For i = 1 To submenulist.count Step 1
	If i<50 Then
		print submenulist (i).GetROProperty("name")
	End If
	
Next


'in order to store list in global sheet the sub menu items
Browser("Top 100 Car Washing Services").Page("List of Gym in Chennai,").Output CheckPoint("List of Gym in Chennai, India - Justdial") @@ script infofile_;_ZIP::ssf63.xml_;_
 @@ script infofile_;_ZIP::ssf41.xml_;_
 
 
 
