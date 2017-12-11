import React from "react";
import { Link } from "react-router-dom";

const FAQ = props => {
  return(
    <div className="faqContainer">
      <div className="FAQ">FAQ
      </div>
      <div className="faqLogos">
        <span className="faqLogosText">
          <img src={require("../assets/faq/image-mbl-faq-register-icon@2x.png")} />
          A. Registration </span>
        <span className="faqLogosText">
          <img src={require("../assets/faq/image-mbl-faq-tuition-icon@2x.png")} />
          B. Tuition & Fees </span>
        <span className="faqLogosText">
          <img src={require("../assets/faq/image-mbl-faq-program-icon@2x.png")} />
          C. Program </span>
        <span className="faqLogosText">
          <img src={require("../assets/faq/image-mbl-faq-transportation-icon@2x.png")} />
          D. Transportation </span>
      </div>
      <hr className="line-2"/>
      <div className="faqMainTextContainer">
        <span className="faqLogosText">
          <img src={require("../assets/faq/image-mbl-faq-register-icon@2x.png")} />
          A. Registration </span>
        <h3 className="faqQuestion">How do I register my child?</h3>
        <p className="faqAnswer">State law requires that we have a full Registration Packet on file before any child can attend our program. After enrolling your child(ren) in enrichment class(es), you must book an in-person registration appointment with your child’s Site Director. No later than two (2) days prior to your in-person appointment, you will receive an email with your completed forms to review, print, sign, and bring to your in-person appointment. Your child will not be admitted to the program until we have these registration materials on file, even if your tuition is paid in full.</p>
        <h3 className="faqQuestion">When is registration?</h3>
        <p className="faqAnswer">Registration appointments will be held on September 5, 6, and 7th for a September 11 start date.  Ongoing registration appointments for new students will be held from 3:30-5pm in the 2nd and 4th week of each month, to start on the 1st or 15th of the month (or the next day Serious Run is in session).  Registration must be made in person, and BY APPOINTMENT ONLY throughout the school year.  See our Registration Page for more information on enrollment dates after September 11.</p>
        <button class="faqBtn">HOW TO REGISTER</button>
        <h3 className="faqQuestion">What do I need to bring to in-person registration?</h3>
        <p className="faqAnswer">To prepare for your registration appointment, please go to our Online Registration Page to create a new account and fill out your registration information. Your child will not be admitted to the program until we have these Registration materials on file, even if your tuition is paid in full.</p>
        <h4 className="faqQuestionExtra">Special Healthcare Needs</h4>
        <p className="faqAnswerExtra">If your child has any special healthcare needs, especially if they require emergency allergy medication, have your doctor complete and sign the Individual Health Care Plan and Medication Consent Form (these can be found on our Serious Fun OneDrive Folder).</p>
        <h4 className="faqQuestionExtra">Custody Arrangements</h4>
        <p className="faqAnswerExtra">Additionally, if your family has any custody arrangements, make sure to supply a copy of the arrangement to your Serious Fun Site Director, so we can make sure we’re in compliance with all court orders.</p>
        <h3 className="faqQuestion">My child is returning to Serious Fun.  Do I need to fill out a full registration packet again?</h3>
        <p className="faqAnswer">No, not a full packet, but there is still some paperwork needed. Returning families must review their online profile and make any necessary changes to the information on file. After enrolling your child(ren) in enrichment class(es), you must book an in-person registration appointment with your child’s Site Director. No later than two (2) days prior to your in-person appointment, you will receive an email with your completed forms to review, print, sign, and bring to your in-person appointment. These forms will include a new Authorized Pick-Up List, a new Payment Authorization Form, and a new Payment Agreement & Statement of Understanding. An updated medical form must be submitted annually regardless of changes. Any changes to other relevant information, such as address, phone number, email, custody agreements, etc. should also be submitted at this time as well.</p>
        <h3 className="faqQuestion">Can I complete my in-person registration with a site other than the one my child will attend?</h3>
        <p className="faqAnswer">No.  All in-person registration appointments must occur with the Site Director or Site Supervisor of the location where your child will be attending.</p>
        <h3 className="faqQuestion">Can I register my child for a Serious Fun site at a school other than the school he attends during the day?</h3>
        <p className="faqAnswer">Our PS 85, PS 17, PS 166, and Chelsea Prep sites accept children from schools other than where they are enrolled.  Our PS 150, PS 78, and IS 78 sites do not accept children attending school at other locations.  We’re happy to provide you with additional information regarding transportation if needed.</p>
        <h3 className="faqQuestion">My work schedule is irregular.  Can I change the number of days my child attends from week to week?</h3>
        <p className="faqAnswer">No. Serious Fun cannot accommodate weekly changes to schedules. However, it is possible to request an occasional drop-in day at a rate of $25/day. All drop-in requests must be made in writing at least two (2) school days before the date of service. You may not have more than five(5) drop-in days in a calendar month.</p>
        <h3 className="faqQuestion">If I enroll my child in a class and he doesn’t like it, can he change classes in the middle of the year?</h3>
        <p className="faqAnswer">Yes, however Serious Fun encourages making any changes to enrichment classes within the first few weeks of Serious Fun, as our classes are planned in such a way that each class builds upon skills learned in the previous lessons. Any changes to your child(ren)’s schedule (including, but not limited to, a change of days, change of enrichment class, and cancellation) will incur a $25 Administrative Fee.  </p>
        <h3 className="faqQuestion">I pre-registered and would like to enroll my child in additional days. Is that possible? How would it affect tuition?</h3>
        <p className="faqAnswer">You may add additional days at any time.  Ask your Site Director for the cost for the additional days.  Each childcare day is billed at $700 for the year.</p>
        <h3 className="faqQuestion">I pre-registered and would like to drop days.  Is that possible?</h3>
        <p className="faqAnswer">Yes.  Per our Tuition Agreement and Statement of Understanding, you may reduce, add or change scheduled days for your child’s participation in the program by written notice to your Serious Fun Site Director.  Any changes must be made in writing.  This includes, but is not limited to, reduction in program days, or change in enrichment class.  Dropping days WILL NOT change the installment for the month in which the change was requested.  There will be a $25 Administrative Fee for any change. You may add additional Serious Fun program days without incurring an Administrative Fee.</p>
        </div>


      <hr className="line-2"/>


      <div className="faqMainTextContainer">
        <span className="faqLogosText">
          <img src={require("../assets/faq/image-mbl-faq-tuition-icon@2x.png")} />
          B. Tuition & Fees </span>
        <h3 className="faqQuestion">Is the $50 registration fee per child?</h3>
        <p className="faqAnswer">No. The $50 Registration Fee is per family.</p>
        <h3 className="faqQuestion">How can I pay for my Serious Fun tuition?</h3>
        <p className="faqAnswer">Tuition may be paid in full or by installment.  You must provide bank account or credit card information for program fees and any additional charges, including but not limited to late pick up fees, late payment fees, failed transaction fees, drop in fees, material fees and administrative fees. Payment in Full: If you pay in full at the time of registration, you are entitled to a 5% discount. Installments: Installments are the total tuition due prorated over a period of time.  Each installment is an equal amount and does not reflect the number of program days in a given month.  The first installment is due upon registration and each subsequent installment payment will be automatically charged on the 5th, or closest business day, of each month for the next period.  The final installment will be charged on May 5, 2018.</p>
        <h3 className="faqQuestion">Can I set up recurring installment payments using my Credit Card or Checking Account?</h3>
        <p className="faqAnswer">Yes. To set up a recurring charge to your credit card or Echeck (ACH), please store your payment information under your secure online profile at our Online Registration Page.</p>
        <h3 className="faqQuestion">Can I cancel after submitting payment ?</h3>
        <p className="faqAnswer">Insert response here.</p>
        <button class="faqBtn">POLICIES</button>
      </div>


      <hr className="line-2"/>


      <div className="faqMainTextContainer">
        <span className="faqLogosText">
          <img src={require("../assets/faq/image-mbl-faq-program-icon@2x.png")} />
          C. Program </span>
        <h3 className="faqQuestion">What do the children do each day?</h3>
        <p className="faqAnswer">Each day Serious Fun provides children with a snack, child-choice time, a 40 minute enrichment class, homework help, and a minimum of 30 minutes active play.</p>
        <h3 className="faqQuestion">How big are the enrichment classes?</h3>
        <p className="faqAnswer">Maximum class size varies from class to class, with the largest classes never exceeding 20 students. If enrollment in any class is less than 10 students, Serious Fun reserves the right to merge or cancel the class.  All children in a cancelled class will be offered a place in an alternative class meeting on the same day as the original.</p>
        <h3 className="faqQuestion">What is your ratio of teachers to students?</h3>
        <p className="faqAnswer">Our teacher:student ratio is 1:10 for any class with children in grades K through 5th.  The ratio for Pre-K students is 1:7.</p>
        <h3 className="faqQuestion">What happens if the class my child wants to enroll in is full?</h3>
        <p className="faqAnswer">If a class is full, students will be offered a place in the alternative class option offered on the same day.  If all class options are full, Serious Fun will open either an additional class or additional option.</p>
        <h3 className="faqQuestion">Can my child attend Serious Fun on a day he’s not regularly scheduled to attend?</h3>
        <p className="faqAnswer">Yes.  Serious Fun understands that occasionally a family might need childcare in addition to a child’s regularly scheduled days.  We offer a drop-in day at a rate of $25/day, with 2 school days’ notice required before the date of service.  No more than 5 drop in days may be used in a calendar month.</p>
      </div>

      <hr className="line-2"/>

      <div className="faqMainTextContainer">
        <span className="faqLogosText">
          <img src={require("../assets/faq/image-mbl-faq-transportation-icon@2x.png")} />
          D. Transportation </span>
        <h3 className="faqQuestion">How do I arrange transportation for my child from his school to a Serious Fun site?</h3>
        <p className="faqAnswer">If your child is in need of bus transportation to Serious Fun at PS 166, PS 17 or PS 85, please contact Astoria Express (visit www.astoriaexpress.com or call 718-626-3369) for more information regarding service and pricing.  While Serious Fun recommends Astoria Express, we are happy to accept children from any other transportation company as well. Any child being transported by bus will need a School Authorization Letter which is available from Serious Fun upon receipt of your registration. Please note that the transportation company cannot pick up your child without the School Authorization Letter.</p>
        <h3 className="faqQuestion">Is there someone on the bus with the children who are being transported by bus?</h3>
        <p className="faqAnswer">Yes.  Serious Fun’s Transportation Coordinator rides on the bus with the children every day to make sure all children are accounted for and have a safe and happy ride to their Serious Fun site!</p>
        <h3 className="faqQuestion">How much does bussing cost?</h3>
        <p className="faqAnswer">All bussing costs and agreements (including cost of transportation) are made directly between the transportation company and the parent.  Please contact Astoria Express directly for their rates.   Keep in mind, we’re happy to accept children from any transportation company, so if you find another company that works better for your family’s budget, we’re happy to work with you and that company to make your child’s arrival to Serious Fun run smoothly!</p>
        <h3 className="faqQuestion">Does Serious Fun provide transportation at the end of the Serious Fun program?</h3>
        <p className="faqAnswer">No. It is the responsibility of the parent to arrange transportation for his/her child at the conclusion of each day.</p>
      </div>
    </div>
    );
};

export default FAQ;
