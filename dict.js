// abbr (without quote marks) | full Hebrew | English
const RT_RAW = `
רמבם|רבי משה בן מימון|Rambam (Maimonides)
רמבן|רבי משה בן נחמן|Ramban (Nachmanides)
רשי|רבי שלמה יצחקי|Rashi
רשבא|רבי שלמה בן אדרת|Rashba
ריטבא|רבי יום טוב בן אברהם אשבילי|Ritva
רשבם|רבי שמואל בן מאיר|Rashbam
ראבד|רבי אברהם בן דוד|Ra'avad
רא״ש|רבנו אשר|Rosh (Rabbeinu Asher)
ראש|רבנו אשר|Rosh (Rabbeinu Asher)
ריף|רבי יצחק אלפסי|Rif (Alfasi)
רן|רבנו נסים|Ran (Rabbeinu Nissim)
רי|רבי יצחק|Ri (Rabbi Yitzchak)
ר|רבי|Rabbi
רח|רבנו חננאל|Rabbeinu Chananel
רת|רבנו תם|Rabbeinu Tam
רבש|רבי יצחק בר ששת|Rivash
תשבץ|תשובות שמעון בן צמח|Tashbetz
מהרל|מורנו הרב רבי ליווא|Maharal
מהרשא|מורנו הרב רבי שמואל אליעזר|Maharsha
מהרשל|מורנו הרב רבי שלמה לוריא|Maharshal
מהרם|מורנו הרב רבי מאיר|Maharam
מהריק|מורנו הרב רבי יוסף קולון|Maharik
רמא|רבי משה איסרליש|Rema (Rabbi Moshe Isserles)
רמ״א|רבי משה איסרליש|Rema
שך|שפתי כהן|Shach (Siftei Kohen)
טז|טורי זהב|Taz (Turei Zahav)
מגא|מגן אברהם|Magen Avraham
משב|משנה ברורה|Mishnah Berurah
מב|משנה ברורה|Mishnah Berurah
באה|באר היטב|Ba'er Heitev
בה|ביאור הלכה|Bi'ur Halachah
שעה|שער הציון|Sha'ar HaTziyun
שוע|שולחן ערוך|Shulchan Aruch
שע|שולחן ערוך|Shulchan Aruch
אוח|אורח חיים|Orach Chaim
יוד|יורה דעה|Yoreh De'ah
אהע|אבן העזר|Even HaEzer
חומ|חושן משפט|Choshen Mishpat
טור|ארבעה טורים|Tur
בי|בית יוסף|Beit Yosef
כמ|כסף משנה|Kesef Mishneh
מגמ|מגיד משנה|Maggid Mishneh
שות|שאלות ותשובות|Responsa (She'elot uTeshuvot)
תוס|תוספות|Tosafot
תוספ|תוספות|Tosafot
גמ|גמרא|Gemara
מתני|מתניתין|Mishnah (our Mishnah)
משנ|משנה|Mishnah
ברי|ברייתא|Baraita
בבלי|תלמוד בבלי|Babylonian Talmud
ירו|ירושלמי|Jerusalem Talmud
ירוש|ירושלמי|Jerusalem Talmud
דף|דף|page (folio)
ע״א|עמוד א|side a
עא|עמוד א|side a (amud aleph)
עב|עמוד ב|side b (amud bet)
דה|דיבור המתחיל|"the passage beginning…" (d.h.)
ד״ה|דיבור המתחיל|d.h. — heading beginning
אא|אי אפשר|it is impossible
אאכ|אלא אם כן|unless
אע״פ|אף על פי|even though
אעפ|אף על פי|even though
אעפכ|אף על פי כן|nevertheless
אעג|אף על גב|even though
אפ|אפילו|even
אפי|אפילו|even
אל|אמר ליה|he said to him
אמר|אמר|said
אר|אמר רבי|Rabbi … said
אריו|אמר רבי יוחנן|Rabbi Yochanan said
את|אין תימה|no wonder
בד״א|במה דברים אמורים|when is this said?
בדא|במה דברים אמורים|when is this said?
בה״א|בית הלל אומרים|Beit Hillel say
בש|בית שמאי|Beit Shammai
בה|בית הלל|Beit Hillel
בהמ|בית המקדש|the Holy Temple
בהמק|בית המקדש|the Holy Temple
בהכנ|בית הכנסת|synagogue
ביהכנ|בית הכנסת|synagogue
ביהמד|בית המדרש|study hall (beit midrash)
ביד|בית דין|rabbinical court
בד|בית דין|rabbinical court
בכ|בכל ענין|in any case
גכ|גם כן|also
דא|דבר אחר|another interpretation
דבא|דבר אחר|another interpretation
דאו|דאורייתא|Torah-level (biblical) law
דרבנ|דרבנן|rabbinic law
דאורי|דאורייתא|Torah law
הקבה|הקדוש ברוך הוא|the Holy One, Blessed be He
הקב״ה|הקדוש ברוך הוא|the Holy One, Blessed be He
השי|השם יתברך|God, may He be blessed
השית|השם יתברך|God, may He be blessed
הי|השם יתברך|God
ה|השם|Hashem (God)
הש|השם|Hashem
הא|הוא אומר|he says
הל|הלכה|halacha
הלכ|הלכות|laws of
הלמ|הלכה למשה מסיני|law given to Moshe at Sinai
וכו|וכולי|etc.
וכ|וכולי|etc.
וגו|וגומר|etc. (of a verse)
וא״ת|ואם תאמר|and if you say
ואת|ואם תאמר|and if you ask
וי״ל|ויש לומר|and one may answer
ויל|ויש לומר|and one may answer
וכן|וכן|and likewise
זל|זכרונו לברכה|of blessed memory
ז״ל|זכרונו לברכה|of blessed memory
זצל|זכר צדיק לברכה|may the memory of the righteous be a blessing
זיע|זכותו יגן עלינו|may his merit protect us
זיעא|זכותו יגן עלינו אמן|may his merit protect us, amen
זא|זאת אומרת|that is to say
חזל|חכמינו זכרונם לברכה|Chazal (our Sages)
חז״ל|חכמינו זכרונם לברכה|Chazal (our Sages)
חו|חס ושלום|Heaven forbid
חוש|חס ושלום|Heaven forbid
חכ|חכמים|Sages
חי|חיים|life
טו|טעות|error
יא|יש אומרים|some say
יל|יש לומר|one may say
ימש|ימח שמו|may his name be erased
יתש|יתברך שמו|may His Name be blessed
יוהכ|יום הכיפורים|Yom Kippur
יוכ|יום כיפור|Yom Kippur
יט|יום טוב|festival day (Yom Tov)
כא|כל אחד|each one
כג|כגון|for example
כד|כדי|in order to
כו|כולי|etc.
כמש|כמו שכתוב|as it is written
כש|כמו שכתוב|as written
כל|כאן לשונו|here are his words
כנ|כנראה|apparently
כנל|כנזכר לעיל|as mentioned above
כה|כהן|Kohen
כי|כתבי יד|manuscripts
לכ|לכן|therefore
לק|לקמן|below / later
לקמ|לקמן|below / later
לעיל|לעיל|above / earlier
לשה|לשון הרע|evil speech (lashon hara)
לה״ר|לשון הרע|lashon hara
מא|מאי אמרת|what are you saying?
מט|מאי טעמא|what is the reason?
מ״ט|מאי טעמא|what is the reason?
מכ|מכל מקום|in any case
מכמ|מכל מקום|in any case
מ״מ|מכל מקום|nevertheless
ממ|מכל מקום|nevertheless
מש|מה שאין כן|which is not so
משאכ|מה שאין כן|which is not the case
מע|מצות עשה|positive commandment
מעש|מצות עשה|positive commandment
מצע|מצות עשה|positive commandment
לת|לא תעשה|negative commandment
מסח|מסכת|tractate
מס|מסכת|tractate
מוצש|מוצאי שבת|Saturday night (after Shabbat)
מוצ״ש|מוצאי שבת|after Shabbat
מהר|מהרה|speedily
נל|נראה לי|it seems to me
נ״ל|נראה לי|it seems to me
נע|נשמתו עדן|his soul is in Eden
נבת|נשמתו בגנזי מרומים|may his soul rest on high
סד|סייעתא דשמיא|with Heaven's help
ס״ד|סייעתא דשמיא|with Heaven's help
בס״ד|בסייעתא דשמיא|with the help of Heaven
בסד|בסייעתא דשמיא|with the help of Heaven
בעה|בעזרת השם|with God's help
בעזה|בעזרת השם|with God's help
בעז״ה|בעזרת השם|with God's help
בה״|ברוך השם|thank God
בה|ברוך השם|thank God (Baruch Hashem)
בעה״ב|בעל הבית|homeowner
בעהב|בעל הבית|homeowner
בעהמ|בעל המאמר|the author
בעל|בעל|owner
סס|סוף סוף|ultimately
סי|סימן|chapter/section (siman)
ס״ק|סעיף קטן|sub-paragraph
סק|סעיף קטן|sub-paragraph
סע|סעיף|paragraph
ספ|סוף פרק|end of chapter
עכ|עד כאן|until here
עכל|עד כאן לשונו|end of quote
עכ״ל|עד כאן לשונו|end of quote
עי|עיין|see
עיי|עיין|see
עיש|עיין שם|see there
עש|עיין שם|see there
ע״ש|עיין שם|see there
עז|עבודה זרה|idolatry / Avodah Zarah
עה|עליו השלום|peace be upon him
עה״ש|עליו השלום|peace be upon him
עפ|על פי|according to
עפי|על פי|according to
ע״פ|על פי|according to
עפרוב|על פי רוב|usually
עכפ|על כל פנים|at any rate
עד|על דרך|by way of
עדמ|על דרך משל|by way of parable
עדה|על דרך הפשט|according to the simple meaning
עהת|על התורה|on the Torah
פי|פירוש|explanation / commentary
פירש|פירש|explained
פ|פרק|chapter
פרש|פרשה|weekly portion
פ״ק|פרק קמא|first chapter
פשט|פשוטו של מקרא|plain meaning of the verse
פרדס|פשט רמז דרש סוד|PaRDeS (four levels of interpretation)
צל|צריך לומר|should read / must say
צ״ל|צריך לומר|must say
צע|צריך עיון|requires further study
צ״ע|צריך עיון|requires further study
צב|צריך ביאור|requires explanation
קו|קל וחומר|a fortiori (kal vachomer)
ק״ו|קל וחומר|a fortiori
קש|קריאת שמע|reciting the Shema
ק״ש|קריאת שמע|Shema recitation
קשה|קשה|difficulty
רבשע|רבונו של עולם|Master of the Universe
רבש״ע|רבונו של עולם|Master of the Universe
רח״ל|רחמנא ליצלן|God save us
רחל|רחמנא ליצלן|Heaven save us
רה|ראש השנה|Rosh Hashanah
ר״ה|ראש השנה|Rosh Hashanah
רח|ראש חודש|Rosh Chodesh (new month)
ר״ח|ראש חודש|Rosh Chodesh
רת|ראשי תיבות|abbreviation (rashei teivot)
ר״ת|ראשי תיבות|abbreviation (rashei teivot)
רבינו|רבינו|our teacher
שליטא|שיחיה לאורך ימים טובים אמן|may he live long, amen (shlita)
שליט״א|שיחיה לאורך ימים טובים אמן|shlita
שיחי|שיחיה|may he live
שי|שיחיה|may he live
שם|שם|there
שס|ששה סדרים|Shas (the whole Talmud)
ש״ס|ששה סדרים|Shas (the six orders)
שמע|שמע ממינה|learn from this
שמ|שמע מינה|we learn from this
ש״מ|שמע מינה|we learn from this
שב|שבת|Shabbat
שבק|שבת קודש|holy Shabbat
שק|שבת קודש|holy Shabbat
שהש|שיר השירים|Song of Songs
תנך|תורה נביאים כתובים|Tanach (Bible)
תנ״ך|תורה נביאים כתובים|Tanach
תו|תורה|Torah
תושבע|תורה שבעל פה|Oral Torah
תושבכ|תורה שבכתב|Written Torah
תח|תלמידי חכמים|Torah scholars
ת״ח|תלמיד חכם|Torah scholar
תלח|תלמיד חכם|Torah scholar
תיקו|תשבי יתרץ קושיות ואבעיות|Teiku — unresolved (Elijah will resolve)
תיק|תיקוני|Tikkunei
תקז|תיקוני זוהר|Tikkunei Zohar
תז|תיקוני זוהר|Tikkunei Zohar
זוהק|זוהר הקדוש|the holy Zohar
זהק|זוהר הקדוש|the holy Zohar
זה״ק|זוהר הקדוש|the holy Zohar
זח|זוהר חדש|Zohar Chadash
רשבי|רבי שמעון בר יוחאי|Rashbi (Rabbi Shimon bar Yochai)
רשב״י|רבי שמעון בר יוחאי|Rashbi
אריז|האר״י ז״ל|the Arizal
האר״י|האלוקי רבי יצחק|the Ari (Arizal)
ארי|האלוקי רבי יצחק|the Ari
הארי|האלוקי רבי יצחק|the Ari
אריזל|האלוקי רבי יצחק זכרונו לברכה|the Arizal
עחי|עץ חיים|Etz Chaim
עח|עץ חיים|Etz Chaim
פעח|פרי עץ חיים|Pri Etz Chaim
אס|אין סוף|Ein Sof (the Infinite)
א״ס|אין סוף|Ein Sof
אסבה|אין סוף ברוך הוא|Ein Sof, blessed be He
אק|אדם קדמון|Adam Kadmon (Primordial Man)
א״ק|אדם קדמון|Adam Kadmon
זא|זעיר אנפין|Zeir Anpin
ז״א|זעיר אנפין|Zeir Anpin
זו״נ|זעיר אנפין ונוקבא|Zeir Anpin and Nukva
זון|זעיר אנפין ונוקבא|Zeir Anpin and Nukva
או״א|אבא ואמא|Abba and Imma (partzufim)
אוא|אבא ואמא|Abba and Imma
אבי״ע|אצילות בריאה יצירה עשיה|the Four Worlds (Atzilut, Beriah, Yetzirah, Asiyah)
אביע|אצילות בריאה יצירה עשיה|the Four Worlds
חבד|חכמה בינה דעת|Chochmah, Binah, Da'at (Chabad)
חב״ד|חכמה בינה דעת|Chabad (wisdom, understanding, knowledge)
חגת|חסד גבורה תפארת|Chesed, Gevurah, Tiferet
חג״ת|חסד גבורה תפארת|Chesed, Gevurah, Tiferet
נהי|נצח הוד יסוד|Netzach, Hod, Yesod
נה״י|נצח הוד יסוד|Netzach, Hod, Yesod
כחב|כתר חכמה בינה|Keter, Chochmah, Binah
נרנח|נפש רוח נשמה חיה|Nefesh, Ruach, Neshamah, Chayah
נרנחי|נפש רוח נשמה חיה יחידה|the five levels of the soul
סא|סטרא אחרא|the Other Side (sitra achra)
ס״א|סטרא אחרא|sitra achra
בעהט|בעל שם טוב|the Baal Shem Tov
בעש״ט|בעל שם טוב|the Baal Shem Tov
בעשט|בעל שם טוב|the Baal Shem Tov
אדה״ז|אדמו״ר הזקן|the Alter Rebbe
אדהז|אדמו״ר הזקן|the Alter Rebbe
אדמור|אדוננו מורנו ורבנו|Admor (Rebbe)
אדמו״ר|אדוננו מורנו ורבנו|Admor (Rebbe)
גרא|הגאון רבי אליהו|the Vilna Gaon (Gra)
הגרא|הגאון רבי אליהו|the Vilna Gaon
הגר״א|הגאון רבי אליהו|the Vilna Gaon
חפץ|חפץ חיים|Chafetz Chaim
חח|חפץ חיים|Chafetz Chaim
חזא|חזון איש|Chazon Ish
חזו״א|חזון איש|Chazon Ish
רמחל|רבי משה חיים לוצאטו|Ramchal
רמח״ל|רבי משה חיים לוצאטו|Ramchal
אבע|אבן עזרא|Ibn Ezra
ראבע|רבי אברהם אבן עזרא|Ibn Ezra
רדק|רבי דוד קמחי|Radak
רד״ק|רבי דוד קמחי|Radak
אוה״ח|אור החיים|Or HaChaim
אוהח|אור החיים|Or HaChaim
בה״ג|בעל הלכות גדולות|Ba'al Halachot Gedolot
בהג|בעל הלכות גדולות|Halachot Gedolot
סמג|ספר מצוות גדול|Semag
סמ״ג|ספר מצוות גדול|Semag
סמק|ספר מצוות קטן|Semak
שולחע|שולחן ערוך|Shulchan Aruch
קצשוע|קיצור שולחן ערוך|Kitzur Shulchan Aruch
קצו״ע|קיצור שולחן ערוך|Kitzur Shulchan Aruch
שוע״ה|שולחן ערוך הרב|Shulchan Aruch HaRav
שעה|שולחן ערוך הרב|Shulchan Aruch HaRav
ערה״ש|ערוך השולחן|Aruch HaShulchan
ערהש|ערוך השולחן|Aruch HaShulchan
מדרר|מדרש רבה|Midrash Rabbah
בר|בראשית רבה|Bereishit Rabbah
ב״ר|בראשית רבה|Bereishit Rabbah
שמו״ר|שמות רבה|Shemot Rabbah
ויקר|ויקרא רבה|Vayikra Rabbah
במדבר|במדבר|Bamidbar
פדר״א|פרקי דרבי אליעזר|Pirkei DeRabbi Eliezer
פדרא|פרקי דרבי אליעזר|Pirkei DeRabbi Eliezer
יל״ש|ילקוט שמעוני|Yalkut Shimoni
ילש|ילקוט שמעוני|Yalkut Shimoni
תדבא|תנא דבי אליהו|Tanna DeVei Eliyahu
בב|בבא בתרא|Bava Batra
ב״ב|בבא בתרא|Bava Batra
בק|בבא קמא|Bava Kamma
ב״ק|בבא קמא|Bava Kamma
במ|בבא מציעא|Bava Metzia
ב״מ|בבא מציעא|Bava Metzia
עז|עבודה זרה|Avodah Zarah
ע״ז|עבודה זרה|Avodah Zarah
מק|מועד קטן|Moed Katan
מו״ק|מועד קטן|Moed Katan
רה״ש|ראש השנה|Rosh Hashanah (tractate)
יוהכ|יום הכיפורים|Yom Kippur
שה״ש|שיר השירים|Song of Songs
דהי|דברי הימים|Chronicles
דה״י|דברי הימים|Chronicles
שמואא|שמואל א|I Samuel
ירמ|ירמיהו|Jeremiah
ישע|ישעיהו|Isaiah
יחז|יחזקאל|Ezekiel
תה|תהלים|Psalms
תהל|תהלים|Psalms
משלי|משלי|Proverbs
קהל|קהלת|Ecclesiastes
בראש|בראשית|Genesis
שמ׳|שמות|Exodus
ויק|ויקרא|Leviticus
במד|במדבר|Numbers
דבר|דברים|Deuteronomy
אמן|אל מלך נאמן|Amen (God, faithful King)
בא״י|ברוך אתה ה׳|Blessed are You, Hashem
באי|ברוך אתה ה׳|Blessed are You, Hashem
בשכמלו|ברוך שם כבוד מלכותו לעולם ועד|Blessed be the Name of His glorious kingdom forever
בשכמל״ו|ברוך שם כבוד מלכותו לעולם ועד|Baruch Shem…
אמו|אמן ואמן|amen and amen
יהר|יהי רצון|may it be Your will
יה״ר|יהי רצון|may it be Your will
ש״ץ|שליח ציבור|prayer leader (chazzan)
שץ|שליח ציבור|prayer leader
שמונע|שמונה עשרה|the Amidah (Shemoneh Esrei)
שמו״ע|שמונה עשרה|the Amidah
יו״ט|יום טוב|Yom Tov (festival)
חוהמ|חול המועד|Chol HaMoed
חוה״מ|חול המועד|Chol HaMoed
עש״ק|ערב שבת קודש|Friday (eve of holy Shabbat)
עשק|ערב שבת קודש|Shabbat eve
ערהש|ערב השבת|Shabbat eve
פסוז|פסוקי דזמרה|Pesukei DeZimra
תפי|תפילין|tefillin
תפ|תפילה|prayer
תשו|תשובה|repentance / responsum
מוהר|מורנו הרב|our teacher the Rabbi
מוה״ר|מורנו הרב|our teacher, the Rabbi
הרה״ג|הרב הגאון|the great Rabbi (HaRav HaGaon)
הרהג|הרב הגאון|the great Rabbi
הרהגהצ|הרב הגאון הצדיק|the great righteous Rabbi
הגה״ק|הגאון הקדוש|the holy Gaon
הגהק|הגאון הקדוש|the holy Gaon
הה|הרב הגאון|the Rabbi
רבה|רבה|Rabbah
ר״י|רבי יהודה|Rabbi Yehudah
ריב״ל|רבי יהושע בן לוי|Rabbi Yehoshua ben Levi
ריבל|רבי יהושע בן לוי|Rabbi Yehoshua ben Levi
ריבז|רבי יוחנן בן זכאי|Rabbi Yochanan ben Zakkai
רשבג|רבן שמעון בן גמליאל|Rabban Shimon ben Gamliel
רשב״ג|רבן שמעון בן גמליאל|Rabban Shimon ben Gamliel
ראבע|רבי אלעזר בן עזריה|Rabbi Elazar ben Azariah
ת״ק|תנא קמא|the first Tanna (anonymous opinion)
תק|תנא קמא|the first Tanna
תר|תנו רבנן|our Rabbis taught
ת״ר|תנו רבנן|our Rabbis taught
תש|תא שמע|come and hear
ת״ש|תא שמע|come and hear
אי|אי נמי|alternatively
אינ|אי נמי|alternatively
א״נ|אי נמי|alternatively
אמ|אמר מר|the Master said
א״ר|אמר רבי|Rabbi … said
אמרי|אמרי|they say
תיובתא|תיובתא|refutation
ק״ל|קשיא ליה|it was difficult for him
קל|קשיא ליה|it was difficult for him
קמל|קא משמע לן|it teaches us
קמ״ל|קא משמע לן|it teaches us
ה״מ|הני מילי|this applies
המ|הני מילי|these words apply
הנ״ל|הנזכר לעיל|mentioned above
הנל|הנזכר לעיל|mentioned above
לקמ״ל|לקמן|below
ת״ל|תלמוד לומר|the verse teaches
תל|תלמוד לומר|the verse teaches
ז״ש|זהו שכתוב|this is what is written
זש|זהו שכתוב|this is what is written
הה״ד|הדא הוא דכתיב|this is what is written
ההד|הדא הוא דכתיב|this is what is written
משה|משה רבינו|Moshe Rabbeinu
מרעה|משה רבינו עליו השלום|Moshe Rabbeinu, peace be upon him
אאע״ה|אברהם אבינו עליו השלום|Avraham Avinu, peace be upon him
אאעה|אברהם אבינו עליו השלום|Avraham Avinu
דהמע|דוד המלך עליו השלום|King David
דהע״ה|דוד המלך עליו השלום|King David, peace be upon him
מש״ח|משיח|Mashiach
ביא|במהרה בימינו אמן|speedily in our days, amen
בבא|במהרה בימינו אמן|speedily in our days
אכי״ר|אמן כן יהי רצון|amen, may it be His will
אכיר|אמן כן יהי רצון|amen, may it be so
`;
