
 
 var firebaseConfig = {
  apiKey: "AIzaSyA3YltChWDcrQjZhgrv5O_df5VeA1CcVRo",
  authDomain: "emailaut-8374c.firebaseapp.com",
  databaseURL: "https://emailaut-8374c.firebaseio.com",
  projectId: "emailaut-8374c",
  storageBucket: "emailaut-8374c.appspot.com",
  messagingSenderId: "441619242876",
  appId: "1:441619242876:web:b77ee0cdc13ee5ee8ecef9"
};
firebase.initializeApp(firebaseConfig);
  let database = firebase.database();
  var date = new Date();
var dateString = date.toISOString().substring(0, 10);



// Save the user's referrer URL to the database

// Increment the user count for the current day
database.ref("users_per_day_ai/" + dateString).transaction(function(currentCount) {
  return (currentCount || 0) + 1;
});

function get_fr_ai(user_data,my_data,callback)
{
// let reft = database.ref('search_crime');
// reft.push({searchfor:user_data,date:dateString}) 
   console.log("get from ai work")
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api-inference.huggingface.co/models/bigscience/bloom");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "Bearer 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");
  xhr.onreadystatechange=function() {
   
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        const response = JSON.parse(this.responseText);
        
        result= response[0].generated_text;
        console.log(result)
        let startIndex = result.indexOf("فعل");
result=result.substring(0, startIndex);

callback(result);



    }

  }

  xhr.send(JSON.stringify({"inputs":my_data+user_data+"جريمة","parameters":{"return_full_text":false,"temperature":1,max_sequence_length:"20000",do_sample:false}}))
  xhr.onerror = function() {
    document.getElementById("result").innerHTML ='حدث خطأ'
    callback(null); // pass null to the callback to indicate an error
  };

}


function sendTextToOpenAI() {
   
   crim_patri="فعل : كل من اختلس شيئا غير مملوك له جريمة:السرقة المادة 350  فعل سرق سيارة جريمة :السرقة المادة 350 فعل استعمل طرق احتيالية لاحد مال الضحية جريمة النصب فعل اختلس شيء سلم له على سبيل الامانة خيانة الامانة  جريمة خيانة الأمانة فعل اصدر شيك لا يقابله رصيد جربمة اصدار شيك بدون رصيد صرف شيك لا يقابله رصيد او كان الرصيد اقل من قيمة الشيك او منع المسحوب عليه من صرفه   جريمة  اصدار شيك بدون رصيد 374  فعل: اخفا اشياء يعلم انها مسروقة  جريمة:   اخفاء اشياء مسروقة المادة 387  فعل: حطم او اتلف اموال الغير جريمة :   تخريب ملك الغير المادة 407   فعل: قام خلسة بنتزاع عقار مملوك للغير   جريمة :   التعدي على الملكية العقارية المادة  389  فعل: قام باختلاس اموال شركته   جريمة :   التفليس المادة 383   فعل : اخد سيارة سلمت له على سبيل الإعارة     جريمة :  خيانة الامانة المادة 376  فعل: قام سليم بسرقة ابيه او جده او امه   جريمة :   لا جريمة على السرقات بين الفروع والاصول المادة 368 فعل فعل :قام  بتصرف في العتاد المرهون   جريمة    جنحة تبديد أموال مرهونة المادة 364   فعل ذا ارتكبت السرقة مع استعمال العنف أو التهديد أو إذا سهل ارتكابها ضعف الضحية الناتج عن سنها أو مرضها أو إعاقتها أو عجزها البدني أو الذهني أو بسبب حالة الحمل سواء كانت هذه الظروف ظاهرة أو معلومة لدى الفاعل جريمة سرقة بنوافر ظرف مشدد المادة 350 مكرر فعل سرق احمد شيء جريمة السرقة المادة 350 فعل سرق سليم شيء بالتهديد جريمة سرقة بنوافر ظرف مشدد المادة 350 مكرر فعل اخد سليم شيء من احمد  السرقة المادة 350 فعلكل من انتزع عقارا مملوكا للغير وذلك خلسة أو بطرق التدليس التعدي على الملكية العقارية المادة 386 فعلكل من أخفى عمدا أشياء مختلسة أو مبددة أو متحصلة من جناية أو جنحة في مجموعها الجريمة إخفاء أشياء مسروقة المادة 387 فعلكل من توصل إلى استلام أو تلقى أموال أو منقولات أو سندات أو تصرفات أو أوراق مالية أو وعود أو مخالصات أو إبراء من التزامات أو إلى الحصول على أي منها أو شرع في ذلك وكان ذلك بالإحتيال لسلب كل ثروة الغير أو بعضها أو الشروع فيه إما بإستعمال أسماء أو صفات كاذبة أو سلطة خيالية أو إعتماد مالي خيالي أو بإحداث الأمل في الفوز بأي شيء أو في وقوع حادث أو أية واقعة أخرى وهمية أو الخشية النصب المادة 372 فعل كل من أصدر بسوء نية شيكا لا يقابله رصيد قائم وقابل للصرف أو كان الرصيد أقل من قيمة الشيك أو قام بسحب الرصيد كله أو بعضه بعد إصدار الشيك أو منع المسحوب عليه من صرفه جريمة اصدار شيك بدون رصيد المادة 373 فعل كل من وضع النار عمدا في مبان أو مساكن أو غرف أو خيم أو أكشاك ولو متنقلة أو بواخر أو سفن أو مخازن أو ورش، وذلك إذا كانت مسكونة أو مستعملة للسكنى، وعلى العموم في أماكن مسكونة أو مستعملة للسكنى، سواء كانت مملوكة أو غير مملوكة لمرتكب الجناية جريمة وضع النار في مباني المادة 395 فعل "
    crim_else="فعل : ازهاق روح انسان حي عمدا شخص جريمة :القتل العمدي المادة 256  فعل ضرب شخص وسبب له عجز فوق 15 يوم جريمة :الضرب والجرح العمدي المادة 288 فعل :ضرب شحص وسبب له عجز اقل من 15 يوم جريمة:الضرب والجرح الخفيف المادة  466 فعل ضرب احمد علي وسبب له عجز يوم او يومان او تلاتة أيام او أربعة أيام او خمسة أيام أي اقل من 15 يوم  جريمة الضرب والجرح الخفيف المادة466  فعل ضرب احمد علي وسبب له عجز 16 ايام جريمة :الضرب والجرح العمدي المادة 288  فعل ضرب احمد علي بخنجر او سكين او أي سلاح اخر جريمة الضرب والجرح بسلاح المادة 258 فعل ضرب احمد علي بسكين جريمة الضرب والجرح بسلاح المادة 258 فعل قتل ابوه او امه او احد اصوله الجد الجدة  جريمة قتل الاصول  المادة261 فعل قتل امه او ابوه او جده  جريمة قتل الأصول المادة 261 فعل قتل خاله جريمة قتل عمد المادة 258 فعل قتل عمه جريمة قتل عمدي المادة 258 فعل قتل حيوان جريمة تعديب الحيوانات فعل دخل فجأة او خدعة او يقتحم منزل مواطن جريمة انتهاك حرمة منزل المادة 295 فعل ادعاء بواقعة من شأنها المساس بشرف واعتبار الهيئة المدعى عليها جريمة قدف المادة 296 فعل تعبير مشين او عبارة تتضمن تحقيرا او قدحا لا ينطوي على اسناد واقعةجريمة السب المادة 297 فعل قال لسليم انت عاهر جريمة السب المادة 297 فعل: اختطف أو قبض أو حبس أو حجز أي شخص بدون امر من السلطات وخارج الحالات التي يجيز فيها القانون دلك    جريمة  لخطف المادة 291  الفعل الادعاء بواقعة من شأنها المساس بشرف والاعتبار الاشخاص او هيئة   جريمة  السب المادة 296  فعل:   قال احمد لهناء انتي زانية   جريمة  السب المادة 296  فعل: ابلغ سليم الشرطة ان علي يتاجر في المخدرات وهو يعلم ان دلك غير صحيح   جريمة  الوشاية الكادبة المادة  فعل : قام بالسياقة  وهو في حالة سكر  جريمة :  السياقة في حالة سكر المادة 70 من قانون المرور    فعل : قام بحمل سلاح بدون مبرر شرعي   جريمة :   حمل سلاح بدون مبرر شرعي المادة 39 من قانون تنظيم الاسلحة  فعل ضرب علي احمد وسبب له عجز 5 أيام جريمة ضرب والجرح الخفيف المادة 466 فعل ضرب احمد سليم بسلاح وسبب له عجز يوم الجريمة ضرب وجرح بسلاح المادة 258  فعل ضرب احمد علي بسلاح وسبب لع عجز 15 أيام ضرب وجرح بسلاح المادة 258  فعل ضرب احمد سليم بعصى وسبب له عجز يوم جريمة ضرب وجرح بسلاح المادة 258  فعل ضرب احمد علي بسكين وسبب له عجز 5 أيام جريمة ضرب وجرح بسلاح المادة 258  فعل ضرب احمد علي وسبب له عجز يوم واحد  جريمة ضرب وجرح خفيف المادة  466 فعلضرب احمد بسكين سليم وسبب له عجز ستة ايام  جريمة ضرب وجرح بسلاح المادة 258  فعل كل من قتل خطأ أو تسبب في ذلك برعونته أو عدم احتياطه أو عدم انتباهه أو إهماله أو عدم مراعاته الأنظمة  جريمة القتل الخطأ المادة 288 فعل إذا نتج عن الرعونة أو عن عدم الإحتياط إصابة أو جرح أو مرض أدى إلى العجز الكلي عن العمل لمدة تجاوز ثلاثة أشهرجريمة الجرح الخطأ المادة 289 فعل إذا نتج عن الرعونة أو عن عدم الإحتياط إصابة أو جرح أو مرض أدى إلى العجز الكلي عن العمل لمدة تجاوز ثلاثة أشهرجريمة الجرح مرتكب الجنحة في حالة سكر أو حاول التهرب من المسؤولية الجنائية أو المدنية التي يمكن أن تقع عليه وذلك بالفرار أو بتغيير حالة الأماكن أو بأية طريقة أخرى. جريمة  الجرح الخطأ مع مضاعفة العقوبة المادة 290 فعل  يعد تهريبا للمهاجرين القيام بتدبير الخروج غير المشروع من التراب الوطني لشخص أو عدة أشخاص من أجل الحصول، بصورة مباشرة أو غير مباشرة، على منفعة مالية أو أي منفعة أخرى. الجريمة تهريب المهاجرين المادة 303 مكرر 30 فعل يعد قذفا كل ادعاء بواقعة من شأنها المساس بشرف واعتبار الأشخاص أو الهيئة المدعى عليها به أو إسنادها إليهم أو إلى تلك الهيئة ويعاقب على نشر هذا الإدعاء أو ذلك الإسناد مباشرة أو بطريق إعادة النشر حتى ولو تم ذلك على وجه التشكيك أو إذا قصد به شخص أو هيئة دون ذكر الإسم ولكن كان من الممكن تحديدهما من عبارات الحديث أو الصياح أو التهديد أو الكتابة أو المنشورات أو اللافتات أو الإعلانات موضوع الجريمة. جريمة القدف المادة 296 فعل قام بضرب الشاكي على مستوى الرأس بواسطة حجارة جريمة الضرب والجرح بسلاح المادة 258 فعل ضرب علي احمد وسبب له عاهة مستديمة  الجريمة الضرب والجرح المؤدي لعاهة مستديمة المادة 264 فعل ضرب علي احمد وسبب فقد السمع او الرؤية  الجريمة الضرب والجرح المؤدي لعاهة مستديمة المادة 264 فعل "
       famie_moral="فعل قام بايلاج عظوه الدكري بجسم انتا بغير رضاها جريمة الإغتصاب  فعل:ترك مقر لاسرة لمدة تتجاوز شهرين بدون نفقة   جريمة  ترك الاسرة المادة 333  فعل:اقام علاقة جنسية مع امرءة يعلم انها متزوجة  مع امرءة يعلم انها   جريمة  الزنا  المادة 399  فعل 300  فعل: كل من أجهض إمرأة حاملا أو مفترض حملها بإعطائها مأكولات أو مشروبات أو أدوية أو باستعمال طرق أو أعمال عنف أو بأية وسيلة أخرى سواء وافقت على ذلك أو لم توافق أو شرع في ذلك جريمة الاجهاض المادة 304 كل من أجهض إمرأة حاملا أو مفترض حملها بإعطائها مأكولات أو مشروبات أو أدوية أو باستعمال طرق أو أعمال عنف أو بأية وسيلة أخرى سواء وافقت على ذلك أو لم توافق أو شرع في ذلك جريمة وتبث ان الفاعل يقوم عادة بدلك الاجهاض مع ضرف تشديد المادة 305  فعل كل من ترك طفلا أو عاجزا غير قادر على حماية نفسه بسبب حالته البدنية أو العقلية أو عرضه للخطر في مكان خال من الناس أو حمل الغير على ذلك جريمة تعريض حياة قاصر للخطر المادة314 فعل: قام بلمس مكان حساس في امرءة او رجل بدون رضاه   جريمة:   هتك عرض فعل:لم يقم بدفع النفقة المحكوم بها لمدة شهرين   جريمة    عدم تسديد النفقة المادة 333 فعلكل من خطف أو أبعد قاصرا لم يكمل الثامنة عشرة وذلك بغير عنف أو تهديد أو تحايل أو شرع في ذلك جريمة ابعاد قاصر المادة 326 فع لكل من لم يسلم طفلا موضوعا تحت رعايته إلى الأشخاص الذين لهم الحق في المطالبة به جريمة عدم تسليم قاصر المادة 327 فعل أحد الوالدين الذي يترك مقر أسرته لمدة تتجاوز شهرين (2) ويتخلى عن كافة التزاماته الأدبية أو المادية المترتبة على السلطة الأبوية أو الوصاية القانونية، وذلك بغير سبب جدي. ولا تنقطع مدة الشهرين (2) إلا بالعودة إلى مقر الأسرة على وضع ينبئ عن الرغبة في استئناف الحياة العائلية بصفة نهائية او  الزوج الذي يتخلى عمدا ولمدة تتجاوز شهرين (2) عن زوجته مع علمه بأنها حامل وذلك لغير سبب جدي او أحد الوالدين الذي يعرض صحة أولاده أو واحد أو أكثر منهم أو يعرض أمنهم أو خلقهم لخطر جسيم بأن يسيء معاملتهم أو يكون مثلا سيئا لهم للاعتياد على السكر أو سوء السلوك، أو بأن يهمل رعايتهم، أو لا يقوم بالإشراف الضروري عليهم، وذلك سواء كان قد قضي بإسقاط سلطته الأبوية عليهم أو لم يقض بإسقاطها جريمة اهمال معنوي لقاصر المادة330 فعل "
   crime_pub=" فعل حرر محرر فيه وقائع كادبة جريمة التزوير المادة 288 فعل أهان قاضيا أو موظفا أو ضابطا عموميا أو قائدا أو أحد رجال القوة العمومية  أثناء تأدية وظائفهم أو بمناسبة تأديتها وذلك بقصد المساس بشرفهم أو باعتبارهم أو بالإحترام الواجب لسلطتهم جريمة إهانة موظف المادة 144 فعل  شهد زورا في مواد الجنايات سواء ضد المتهم أو لصالحه جريمة شهادة الزور في جناية المادة 323 فقرة  1 فعل  شهد زورا في مواد الجنح سواء ضد المتهم أو لصالحه جريمة شهادة الزور في جنحة المادة 233 فعل  شهد زورا في مواد المخالفات سواء ضد المتهم أو لصالحه شهادة الزور في مخالفة جريمة شهادة الزور في مخالفة المادة 234 فعل قلد خاتم الدولة أو استعمل الخاتم المقلد جريمة تقليد اختام الدولة المادة 205 فعل كل شخص وجهت إليه اليمين أو ردت عليه في المواد المدنية وحلفها كذبا جريمة اليمين الكادبة المادة 240 فعل قلد أو زور أو زيف نقودا معدنية أو أوراقا نقدية ذات سعر قانوني في الإقليم الوطني أو في الخارج سندات أو أذونات أو أسهم تصدرها الخزينة العمومية وتحمل طابعها أو علامتها أو قسائم الأرباح العائدة من هذه السندات أو الأذونات أو الأسهم جريمة تزوير نقود المادة 197 فعل حمل السلاح ضد الجزائر الجريمة الخيانة والتجسس فعل قام بالتخابر مع دولة اجنبية بقصد حملها على القيام باعمال عدوانية ضد الجزائر فعل اجنبي قام بالتخابر مع دولة اجنبية للقيام باعمال عدوانية ضد الجزئر الجريمة التجسس  المادة 197 فعل امر بعمل تحكمي او مساس بالحرية الشخصية للفرد او بالحقوق الوطنية لمواطن أو اكتر الجريمة الحجز التعسفي المادة 108 فعل قام بالتبليغ على جريمة يعلم انها غير صحيحة اوقدم دليلا كادبا  جريمة إهانة هيئة عمومية المادة 145 غادر الإقليم الوطني بطريقة غير شرعية اتناء اجتياز احد المراكز الحدودية وذلك بانتحاله هوية أو باستعمال وثائق مزورة او اية وسيلة أخرى جريمة مغادرة التراب الوطني بطريقة غير شرعية فعل"
   input_crime_type="فعل سرق سيارة جريمة ضد الأموال فعل سرق شيء جريمة ضد الأموال فعل ضرب قتل شخص جريمة ضد الأشخاص فعل ضرب احمد علي جريمة ضد الأشخاص فعل قتل سمير علي جريمة ضد الأشخاص فعل سرق احمد ما لا يملكه جريمة ضد الأموال فعل اخد احمد نقود  او شيء مبلغ مالي نقود علي جريمة ضد الأموال فعل سرق احمد علي جريمة ضد الأموال فعل قتل احمد سليم جريمة ضد الأشخاص فعل قام بايهام الضحية انه تاجر و اخد ماله جريمة ضد الأموال فعل  لم يدفع النفقة جريمة الأداب والأسرة فعل قام باغتصاب علني مخل بالحياء جريمة الأداب والأسرة فعل اخد سليم شيء من علي جريمة ضد الأموال فعل ابعد او لم يسلم او اهمل قاصر جريمة الأداب والأسرة فعل لم يسلم طفل الى وليه الشرعي جريمة الأداب والأسرة فعل اجهض امرءة حامل او مفترض حملها جريمة الأداب والأسرة فعل اجهض امرءة حامل او مفترض حملها جريمة الأداب والأسرة  فعل قال لفلان انت جريمة ضد الأشخاص  فعل لم يدفع النفقة جريمة الأداب والأسرة  فعل ترك مقر الاسرة جريمة الأداب والأسرة  فعل اقام علاقة مع امرئة متزوجة جريمة جريمة الأداب والأسرة  فعل احرق شيء حطم شيء جريمة ضد ضد الأموال فعل قام بتزوير جريمة ضد الدولة فعل ابلغ على جريمة وهمية جريمة ضد الدولة فعل  "
   
   const textInput = document.getElementById("textInput").value;
   get_fr_ai(textInput,input_crime_type,function(resul)
   {
       console.log("نوع الجريمة حسب الخوارزمية"+resul)
       document.getElementById("result").innerHTML ='انتظر قليلا'
       if (resul.includes("الأموال"))
       {
           console.log("جريمة ضد الاموال")
           const textInput = document.getElementById("textInput").value;
      get_fr_ai(textInput,crim_patri,function(resp){
       console.log("resp="+resp)
       document.getElementById("result").innerHTML =resp

      })
         }else if (resul.includes("الأداب والأسرة")||resul.includes("اسرة")||resul.includes("الأسرة"))
         
         {
           

           console.log("جريمة ضد الأسرة والاداب")
           const textInput = document.getElementById("textInput").value;
      get_fr_ai(textInput,famie_moral,function(resf){
       console.log("resp="+resf)

       document.getElementById("result").innerHTML =resf

      })

         }else if (resul.includes("الدولة"))
         
         {
           

           console.log("جريمة الدولة")
           const textInput = document.getElementById("textInput").value;
      get_fr_ai(textInput,crime_pub,function(rese){
       console.log("resp="+rese)
       document.getElementById("result").innerHTML =rese


      })

         }
         
         
         else {
           console.log("جريمة ضد  الاشخاص")
           get_fr_ai(textInput,crim_else,function(reselse){

               document.getElementById("result").innerHTML= reselse
       
              })
         }
      
   }
   )
         
       }
    
