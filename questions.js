module.exports = {
  start: `
  שלום לכם :)
  אני כאן כדי שקורות החיים שלכם יביאו לכם יותר מענה ויותר ראיונות עבודה!
  נא בחרו "שיפור קורות החיים".`,
  next: `
מצויין :)
אני הולך לשאול אתכם 10 שאלות.
אין נכון או לא נכון, רק האמת.
כולנו כאן כדי להשתפר :)`,
  questions: [
    {
      q: "האם קורות החיים שלכם בפורמט Word?",
      yes: "מעולה! האם יש פסקת פתיחה בת 3-4 שורות בתחילת קורות החיים שלכם?",
      no: `
קורות חיים כותבים ב-Word!
אין בעיה לתחזק קו"ח גם ב-PDF, אבל אותם נשלח רק למי שאומר שזה בסדר מבחינתו.
רב מערכות הקו"ח של המגייסים בשוק קוראות רק WORD ולכן נשלח קו"ח רק ב-WORD
. שאלה הבאה:)

האם יש פסקת פתיחה בת 3-4 שורות בתחילת קורות החיים שלכם?`,
    },
    {
      yes: `טוב מאד! האם הנסיון התעסוקתי שלכם כתוב בגוף ראשון?`,
      no: `קורות החיים שלכם מלאים בנסיון התעסוקתי שלכם. לפני שהמגייס יצלול לשם, תנו לו להבין מאיזה רקע מקצועי אתם מגיעים, 
      מה האני מאמין המקצועי שלכם ולאן אתם מכוונים מקצועית.
פסקת פתיחה של 3-4 שורות תעשה את ההבדל בין עוד משרה שפספסתם למשרה שיכולה להיות שלכם! הפסקה צריכה להיות ממוקמת לפני כל שאר הסעיפים בקו"
. 

האם הנסיון התעסוקתי שלכם כתוב בגוף ראשון?`,
    },
    {
      yes: `הכיוון שלכם מעולה! בואו נמשיך:
האם שילבתם מילות מפתח בנסיון התעסוקתי שלכם?`,
      no: `כשאתם כותבים "ניהול מחלקת מכירות/פיתוח תוכנות גלובאליות/לימוד 50 תלמידים" זה רק אומר למגייס מה היה במקום שעבדתם בו, לא מה אתם עשיתם. 
      לכן נכתוב בגוף ראשון 
      "ניהלתי מחלקת מכירות בת 12 נציגים 
      כולל מנהל צוות אחד" ונוסיף חצי שורה איך עשינו כל דבר "ניהלתי את המחלקה תוך דגש על שביעות רצון הלקוח והיצמדות ליעדים שקבענו בתחילת החודש".
 הרבה יותר טוב. 

האם שילבתם מילות מפתח בנסיון התעסוקתי שלכם?`,
    },
    {
      yes: `אתם יודעים מה אתם עושים, כל הכבוד.
האם קורות החיים שלכם באורך עמוד אחד?`,
      no: `זה מעולה שאתם יודעים לספר מה עשיתם בעבודה הקודמת,
      אבל למה לעבוד קשה? מערכות קו"ח מסננות קו"ח על פי מילות מפתח.
      איך פותרים את הבעיה? נכנסים למשרות דרושים שרלוונטיות לכם, מוצאים מה המילים המשותפות לכל המשרות (מילות המפתח)
      ומשלבים אותן בנסיון התעסוקתי שלכם. למשל, במקום "ניהלתי צוות פיתוח שיודע מה הוא עושה", נכתוב "ניהלתי צוות פיתוח לפי 
      KPI's שנקבעו בסנכרון עם מחלקת פיתוח ומחלקת R&D". נוסחה מנצחת

האם קורות החיים שלכם באורך עמוד אחד?`,
    },
    {
      yes: `זה בסדר, אבל רק שתדעו:
      אומרים לנו הרבה פעמים ואפילו מפחידים אותנו שקו"ח בני יותר מעמוד אחד לא עוברים.
      זה לא נכון!
      איך בן אדם עם למשל יותר מעשור נסיון צריך להכניס את הכל בעמוד אחד??
      הקו"ח שלי בני 2.5 עמודים והם עוברים כל סינון. כל מה שאתם צריכים לעשות זה להפוך את העמוד הראשון למפתה מספיק כדי שהמגייס ירצה
      להמשיך לקרוא הכל. בנוסף, יש גבול כמה אפשר לקצר. יש דברים שחובה לכתוב בנסיון התעסוקתי. חובה שיהיה "בשר" בכל סעיף.
      לא נורא בכלל אם הקו"ח יהיו בני יותר מעמוד אחד. 
האם הכנסתם דברים לא רלוונטיים לקו"ח שלכם?
`,
      no: `טוב מאד.
      חייב שיהיה "בשר" בכל משרה בה עבדתם. אין בעיה שקורות החיים יהיו באורך 2 עמודים אפילו,
      העיקר שהעמוד הראשון יהיה מפתה מספיק כדי שהמגייס ימשיך לקרוא עד הסוף.
      
      האם הכנסתם דברים לא רלוונטיים לקו"ח שלכם?`,
    },
    {
      yes: `זה לא משנה אם יש לכם שנה או עשור של נסיון, יש דברים שלא חובה להכניס לקו"ח. 
      אם אתם מחפשים משרת פיתוח, לא תכתבו שמילצרתם חודשיים אחרי הצבא. 
      אם אתם מחפשים משרה בתחום המסעדנות, אולי דווקא כן תכניסו את זה. 
      אם יש לכם שנים של נסיון 
      ולפני יותר מעשור עבדתם במקום שנראה לכם לא רלוונטי, אתם יכולים לכתוב "בין השנים X-X עבדתי במקום Y, אפרט לפי דרישת המראיין".
האם הכנסתם דברים לא רלוונטיים לקו"ח שלכם?`,
      no: `מצויין!
      זה לא משנה אם יש לכם שנה או עשור של נסיון, יש דברים שלא חובה להכניס לקו"ח.
      אם אתם מחפשים משרת פיתוח, 
      לא תכתבו שמילצרתם חודשיים אחרי הצבא. אם אתם מחפשים משרה בתחום המסעדנות, אולי דווקא כן תכניסו את זה. 
      אם יש לכם שנים של נסיון ולפני יותר מעשור עבדתם 
      במקום שנראה לכם לא רלוונטי, אתם יכולים לכתוב "בין השנים X-X עבדתי במקום Y, אפרט לפי דרישת המראיין
. Next question: Do your languages ​​and skills get an honorable place?)
`,
    },
    {
      yes: `Very good, it's important!
Do you highlight your personal achievements?`,
      no: `everyone sees your name and also your work experience. What about personal information (email, phone, etc.), skills (systems you know, Office, etc.) and languages? My recommendation is to write everything in a prominent position and in an orderly manner. I prefer to write Everything is in a column on the right or left. It's up to you, the main thing is that the file looks organized.

Do you highlight your personal achievements?`,
    },
    {
      yes: `Great, this is the way to make yourself stand out from other candidates.

Did you proofread the resume before sending it?`,
      no: ``,
    },
    {
      yes: `Great. It's minor, but it makes everything look better.
Last question: Do you have more than one CV file?`,
      no: `it is mandatory to proofread your contract. Sometimes there are spelling errors, sometimes typos, and sometimes just double spaces or adjacent words. Of course, an interviewer who will criticize you for spelling errors is not a serious interviewer, but we have the duty to do our best. If you have dyslexia or you don't know how to proofread on your own, you should let a good friend help you with this.
Last question: Do you have more than one CV file?`,
    },
    {
      yes: `Great! This is how you will adapt yourself to any job.
Now that your resume looks great, I'm sure you'll get more invitations for job interviews. Successfully!`,
      no: `sometimes a situation will happen that the same job will have different requirements and in your contract, for each job you performed, there are other things that are suitable for that job. The secret is to prepare 3 different files, similar of course, each of which emphasizes a different job and its advantage
A. Others, which are suitable for the specific position for which you want to apply.
Now that your resume looks great, I'm sure you'll get more invitations for job interviews. Successfully!`,
    },
  ],
};
