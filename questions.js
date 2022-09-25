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
      no: `Your resume is full of your professional experience. Before the recruiter dives in there, let him understand what professional background you come from, what your professional self believes and where you are headed professionally.
An opening paragraph of 3-4 lines will make the difference between another job you missed and a job that could be yours! The paragraph should be placed before all other clauses in the contract. 

Is your work experience written in the first person?`,
    },
    {
      yes: `Your direction is excellent! Let's continue:
Have you included keywords in your work experience?`,
      no: `when you write "Managing a sales department/developing global software/teaching 50 students" it only tells the recruiter what was in the place where you worked, not what you did. Therefore we will write in the first person "I managed a sales department of 12 representatives including one team manager" And add half a line of how we did everything "I managed the department with an emphasis on customer satisfaction and sticking to the goals we set at the beginning of the month".
Much better. 

Have you included keywords in your work experience?`,
    },
    {
      yes: `You know what you're doing, well done.
Is your resume only one page long?`,
      no: `it's great that you know how to tell what you did in your previous job, but why work hard? HR systems filter HR based on keywords. How do you solve the problem? the keywords) and integrate them into your work experience. For example, instead of "I managed a development team that knows what it's doing", we will write "I managed a development team according to KPI's set in sync with the development department and the R&D department"

Is your resume only one page long?`,
    },
    {
      yes: `that's fine, but just so you know:
We are told many times and sometimes even scared that invoices longer than one page do not pass. This is not true! How is a person with more than a decade of experience supposed to put everything on one page?? My invoices are 2.5 pages long and they pass every filter. All you have to do is make the front page enticing enough for the recruiter to keep reading everything. In addition, there is a limit to how much you can shorten. There are things that must be written in the work experience. There must be meat in every section. It's not bad if the contract is more than one page. Are there any irrelevant things in your resume?
`,
      no: `Very good. There must be "meat" in the description of every job you worked.
There is no problem if the resume is even 2 pages long, the main thing is that the first page is enticing enough for the recruiter to continue reading until the end.
Are there any irrelevant things in your resume?`,
    },
    {
      yes: `Very good. There must be "meat" in the description of every job you worked.
There is no problem if the resume is even 2 pages long, the main thing is that the first page is enticing enough for the recruiter to continue reading until the end.
Are there any irrelevant things in your resume?`,
      no: `Great!
It doesn't matter if you have a year or a decade of experience, there are things that are not required to be included in the contract. If you are looking for a development position, you will not write that you applied for two months after the army. If you are looking for a position in the restaurant industry, maybe you should include it. If you have years of experience and more than a decade ago you worked in a place that seems irrelevant to you, you can write "Between the years X-X I worked in place Y, I will specify according to the interviewer's request". Next question: Do your languages ​​and skills get an honorable place?)
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
