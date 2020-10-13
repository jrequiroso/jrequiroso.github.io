
var covidData = [
    { "added": "2020-08-27", "text": "CASE #263: 25-year old male from Brgy Puntod; ROF; arrived in Manila August 16; arrived in CDO August 20 by plane; swab test taken August 25; has occassional colds"},
    { "added": "2020-08-27", "text": "CASE #264: 21-year old male from Brgy Taglimao; LSI from Cebu; arrived in CDO August 20 by boat; swab test taken August 25; has occassional cough"},
    { "added": "2020-08-27", "text": "CASE #265:  1-year old male from Brgy Bayabas; LSI from Bohol; arrived in CDO August 20 by boat; swab test taken August 25; has 3 direct contacts identified"},
    { "added": "2020-08-27", "text": "CASE #266: 31-year old female from Brgy Lapasan; ROF from Middle East; arrived in at Clark August 12; arrived in Manila by bus August 18; arrived in CDO August 19; swab test taken August 24; asymptomatic"},
    { "added": "2020-08-27", "text": "CASE #267: 27-year old female from Brgy Macabalan; ROF fro Middle East; arrived in Manila August; arrived in CDO August 17; swab test taken August 25; asymptomatic"},
    { "added": "2020-08-27", "text": "CASE #268: 30-year old male from Brgy Nazareth; LSI from Cebu; arrived in CDO by boat August 18; swab test taken August 24; asymptomatic"},
    { "added": "2020-08-27", "text": "CASE #269: 31-year old female from Brgy Lapasan; ROF; arrived in Manila August 12; arrived in CDO August 17; swab test taken August 25; asymptomatic"},
    { "added": "2020-08-27", "text": "CASE #270: 31-year old female from NHA Kauswagan; LOCAL CASE – healthcare worker; had chills, fever, loss of taste, smell; swab test taken August 25; has 5 direct contacts; has history of sinusitis; currently confined and isolated at private hospital"},
    { "added": "2020-08-27", "text": "CASE #271: 32-year old male from Brgy Cugman; LOCAL CASE – healthcare worker; swab test taken August 24; has cough, colds; currnetly at NMMC"},
    { "added": "2020-08-28", "text": "CASE #272: 54-year old male from Brgy Carmen; ROF from France; arrived in Manila July 17; arrived in CDI August 21; swab test taken August 26; asymptomatic"},
    { "added": "2020-08-28", "text": "CASE #273: 16-year old male from Brgy Carmen; LSI from Puerto Princesa City; arrived in CDO August 21; swab test taken August 26; had symptoms last August 10 but has now recovered"},
    { "added": "2020-08-28", "text": "CASE #274: 29-year old female from Brgy Puntod; ROF from Middle East; arrived in Manila August 5; arrived in CDO August 21; swab test taken August 26; asymptomatic"},
    { "added": "2020-08-28", "text": "CASE #275: 47-year old female from Brgy Gusa; LOCAL CASE; first admitted at a private hospital August 20 with fever and community acquired pnemonia; swab test taken August 25; 14 close family contacts identified; now referred to NMMC"},
    { "added": "2020-08-28", "text": "CASE #276: 24-year old female from Brgy. 31; LOCAL CASE; Person Deprived of Liberty – Lumbia City Jail; swab test taken August 25; arrested by police August 5; detained at Agora Police Precinct then transferred to Macasandig Police Precinct before brought to BJMP Lumbia"},
    { "added": "2020-08-29", "text": "CASE #277: 30-year old male from Brgy Macabalan; LOCAL CASE – APOR; works at a big private company; swab test taken August 24; asymptomatic; 5 household close contacts"},
    { "added": "2020-08-29", "text": "CASE #278: 22-year old male from Brgy Puntod; LOCAL CASE – APOR; works at a big private company; swab test taken August 24; had fever August 26; 3 household contacts; other household (in-law) still to be verified"},
    { "added": "2020-08-29", "text": "CASE #279: 34-year old female from Brgy Gusa; LOCAL CASE – APOR; works at govt institution at CDO Port; has symptoms since August 21; swab test taken August 27; 4 household contacts; 15 workplace contacts to be verified"},
    { "added": "2020-08-29", "text": "CASE #280: 56-year old female from gated community in Brgy Bulua; LOCAL CASE; had history of travel to Marawi City; returned to CDO August 23 via land travel; developed symptoms last August 24 -cdifficulty in breathing, known asthmatic; referred to NMMC August 27; swab test taken August 27; 2 close family contacts"},
    { "added": "2020-08-29", "text": "CASE #281: 60-year old female from Macanhan, Carmen; LOCAL CASE – vegetable vendor at Cogon Market; showed symptoms last August 24 – difficulty in breathing; admitted at a private hospital and diagnised with acute coronary symdrome and pneumonia; swab test taken August 26; admitted at NMMC; 6 household direct contacts; further contact tracing underway"},
    { "added": "2020-08-31", "text": "CASE #282: 23-year old male from Brgy Bugo; LSI from Manila; arrived August 22 by plane; swab test taken August 27; asymptomatic"},
    { "added": "2020-08-31", "text": "CASE #283: 21-year old female from Brgy Lapasan; LSI from Manila, August 22 by plane; swab test taken August 27; asymptomatic"},
    { "added": "2020-08-31", "text": "CASE #284: 42-year old male from Brgy Patag; LSI from Cebu; arrived August 22 by boat; swab test taken August 27; asymptomatic"},
    { "added": "2020-08-31", "text": "CASE #285: 32-year old male; ROF from Middle East; arrived August 22; swab test taken August 27; contact tracing ongoing"},
    { "added": "2020-08-31", "text": "CASE #286: 58-year old male from Brgy 31; LOCAL CASE; swab test taken at private testing facilty August 22; developed symptoms last August 25"},
    { "added": "2020-08-31", "text": "CASE #287: 70-year old male from Brgy Bayabas; LOCAL CASE; had difficulty breathing August 25; admitted at private hopsital August 28; referred to NMMC August 29; 16 contacts identified; DIED August 29; had myocardial infarction and asthma;"},
    { "added": "2020-08-31", "text": "CASE #288: 43-year old female from Brgy Bugo; LOCAL CASE; went to a Dialysis Center August 27 for her regular (2x week) dialysis; complained of chest pain, shortness of breath while at Dialysis Center; transforted to NMMC and swab test taken August 27; 34 direct contacts identified (16 household, 18 healthcare workers at kidney center)"},
    { "added": "2020-08-31", "text": "CASE #289: 26-year old male; LOCAL CASE – APOR; healthcare worker at a private hospital; direct contact of Case #255 last August 22; under strict home quarantine August 24-30; swab test taken August 26; asymptomatic; 2 direct family contacts and hospital co-workers; currently at isolation unit of private hospital"},
    { "added": "2020-08-31", "text": "CASE #290: 45-year old male from Brgy Nazareth; LSI from Manila; arrived August 23; swab test taken August 28; asymptomatic"},
    { "added": "2020-08-31", "text": "CASE #291: 19-year old female from Brgy Pagalungan; LSI from Manila; arrived August 22; swab test taken August 28; asymptomatic"},
    { "added": "2020-09-01", "text": "CASE #292: 28-year old female from Brgy. Tumpagon; LSI; arrived August 24 by plane; swab taken August 29; 1 close contact identified"},
    { "added": "2020-09-01", "text": "CASE #293: 25-year old female from Brgy. Tumpagon; LSI; arrived August 24 by plane; swab taken August 29"},
    { "added": "2020-09-01", "text": "CASE #294: 39-year old male from Brgy Iponan; LSI; arrived August 23 by plane; swab taken August 28; 1 close contact identified; asymptomatic"},
    { "added": "2020-09-01", "text": "CASE #295: 28-year old male from Brgy Baluang; LSI; arrived August 23 by plane; swab taken August 28; asymptomatic"},
    { "added": "2020-09-01", "text": "CASE #296: 26-year old male from Brgy Lumbia (originally from Cebu); LOCAL CASE – APOR (Institution at Lumbia); swab taken August 29; had tonsilitis last week of August; close contact of Case #253"},
    { "added": "2020-09-01", "text": "CASE #297: 31-year old male from Brgy. Kauswagan; LOCAL CASE; close contact of Case #270 (husband); swab taken August 29; asymptomatic"},
    { "added": "2020-09-01", "text": "CASE #298:  1-year old female Brgy. Kauswagan; LOCAL CASE; daughter of Case #297 and #270; swab taken August 29"},
    { "added": "2020-09-01", "text": "CASE #299: 70-year old male from Brgy. Kauswagan; LOCAL CASE; father of Case #270; swab taken August 29; asymptomatic; hypertensive with medical maintenance; expanded contact tracing ongoing"},
    { "added": "2020-09-01", "text": "CASE #300: 16-year old female from Brgy. Gusa; LOCAL CASE; close contact of Case #248; swab taken August 29; asymptomatic"},
    { "added": "2020-09-01", "text": "CASE #301: 21-year old male from Brgy. Gusa; LOCAL CASE; brother of Case #248; swab taken August 29; asymptomatic"},
    { "added": "2020-09-01", "text": "CASE #302: 27-year old female from Brgy. Gusa; LOCAL CASE; common-law partner of Case #248; swab taken August 29; asymptomatic"},
    { "added": "2020-09-02", "text": "CASE #303: 28-year old female from Brgy Bulua; LSI from Manila; arrived August 26 via Laguindingan Airport; swabbed on August 31; asymptomatic"},
    { "added": "2020-09-02", "text": "CASE #304: 34-year old male from Brgy Canitoan; ROF from Japan; arrived August 25 via Laguindingan Airport; swabbed on August 29;"},
    { "added": "2020-09-02", "text": "CASE #305: 22-year old male from Brgy FS Catanico; LSI from Cebu; arrived August 26 via Macabalan Port; swabbed on August 31; asymptomatic"},
    { "added": "2020-09-02", "text": "CASE #306: 37-year old female from Brgy Gusa (gated community); LOCAL CASE – APOR; arrived Cagayan de Oro August 6; reported for work on August 11 in Misamis Occidental; returned to Cagayan de Oro on August 14; showed symptoms of throat discomfort on August 17; experienced colds and stuffy nose on August 19 and after 2 days had fever and complained of loss of smell and taste; swabbed on August 30; contact tracing ongoing"},
    { "added": "2020-09-02", "text": "CASE #307: 51-year old female from Brgy Lumbia (gated community); LOCAL CASE; admitted in a private hospital on August 26 with symptoms of fever, headache, loss of appetite and loss of taste; swabbed August 31 (private facility); has travel history with husband in a province within the region for a month; referred to NMMC"},
    { "added": "2020-09-03", "text": "CASE #308: 25-year old male from Brgy Macabalan; LSI from Cebu; arrived at Macabalan Port August 26; swabbed August 31; asymptomatic; contact tracing ongoing"},
    { "added": "2020-09-03", "text": "CASE #309: 32-year old male from Brgy Bonbon; LSI from Manila; arrived August 26 via Laguindingan Airport; swabbed August 31; asymptomatic"},
    { "added": "2020-09-03", "text": "CASE #310: 51-year old male from Brgy Kauswagan; LOCAL CASE; developed symptoms August 27 (cough, colds fever); underwent lab exam at private hospital August 31; underwent x-ray and swabbed September 1; hypertensive; had history of travel to one of the towns in the province 3rd week of August; 18 direct family contacts identified (3 houses)"},
    { "added": "2020-09-03", "text": "CASE #311: 56-year old male from Brgy Lumbia; LOCAL CASE; developed symptoms August 24 (cough, colds, fever) and consulted private clinic at Carmen; underwent chest x-ray at private diagnostic lab and diagnosed with pneumonia; went to NMMC OPD September 1; swabbed September 2; currently no more symptoms; 9 direct contacts identified; contact tracing ongoing"},
    { "added": "2020-09-03", "text": "CASE #312: 25-year old female from Brgy Patag; LOCAL CASE – APOR; developed symptoms August 30 (cough, colds), August 31 (fever); swabbed September 2; initial 2 direct contacts identified; contact tracing ongoing; currently admitted at NMMC"},
    { "added": "2020-09-03", "text": "CASE #313: 38-year old female from Brgy Nazareth; LOCAL CASE; BPO worker (work from home since March 2020); gave birth September 1 at private hospital where she is currently admitted; swabbed September 1; had symptoms August 20; 5 direct contacts identified (3 kids, 2 seniors)"},
    { "added": "2020-09-03", "text": "CASE #314: 36-year old female from Brgy Indahag; LOCAL CASE – APOR; gave birth August 31 at a private hospital; swabbed August 28 after having fever, sore throat; swab test came from private test lab; 3 direct contacts identified"},
    { "added": "2020-09-04", "text": "CASE #315: 28-year old male; APOR from Cebu; arrived August 26 via Laguindingan Airport; swabbed August 31; asymptomatic"},
    { "added": "2020-09-04", "text": "CASE #316: 11-year old male from Brgy Bugo; LSI from Davao; arrrived by van August 31; swabbed August 31; 12 cohorts inside van; asymptomatic"},
    { "added": "2020-09-04", "text": "CASE #317: 20-year old female from Brgy Gusa; LSI from Makati; arrived by boat August 27; swabbed August 31; asymptomatic; contact tracing ongoing"},
    { "added": "2020-09-04", "text": "CASE #318: 52-year old male from Brgy Patag; LSI from Las Pinas City; arrived August 27 via Laguindingan Airport; swabbed September 1; asymptomatic; hypertension with maintenance"},
    { "added": "2020-09-04", "text": "CASE #319: 12-year old male from Brgy Carmen; LSI from Manila; arrived by boat August 26; swabbed September 1"},
    { "added": "2020-09-04", "text": "CASE #320: 29-year old male from Brgy Bugo; ROF from Jamaica; history of travel from Jamaica to USA to Clark; arrived August 27; swabbed September 1; asymptomatic"},
    { "added": "2020-09-04", "text": "CASE #321: 34-year old male from Brgy Kauswagan; ROF from Middle East; arrived at NAIA August 17; arrived August 26 via Laguindingan Airport; swabbed September 1; asymptomatic"},
    { "added": "2020-09-04", "text": "CASE #322: 27-year old female from Macanhan, Carmen; LOCAL CASE – APOR; close contact of CASE #281; developed symptoms August 24; consulted at private hospital August 25 together with Case #281; swabbed August 31"},
    { "added": "2020-09-04", "text": "CASE #323:  1-year old female from Macanhan, Carmen; LOCAL CASE; daughter of Case #322"},
    { "added": "2020-09-04", "text": "CASE #324: 28-year old female from Brgy Gusa; LOCAL CASE; daughter of Case #275; swabbed August 31"},
    { "added": "2020-09-04", "text": "CASE #325: 28-year old male from Brgy Gusa; LOCAL CASE; close contact of Case #275; husband of case #324; swabbed August 31; expanded contact tracing ongoing"},
    { "added": "2020-09-04", "text": "CASE #326: 26-year old male from Brgy Gusa; LOCAL CASE; close contact of Case #275; son of Case #275; swabbed August 31; has cough and lung issues"},
    { "added": "2020-09-04", "text": "CASE #327: 17-year old female from Brgy Gusa; LOCAL CASE; close contact of Case #275; daughter of Case #275; swabbed August 31"},
    { "added": "2020-09-04", "text": "CASE #328: 31-year old female from Brgy Gusa; LOCAL CASE; close contact of Case #275; cousin of Case #275; accompanied Case #275 August 24 in private hospital; asymptomatic; ongoing expanded contact tracing"},
    { "added": "2020-09-04", "text": "CASE #329: 16-year old male from Brgy Gusa; LOCAL CASE; close contact of Case #275; son of Case #275; swabbed August 31; asymptomatic"},
    { "added": "2020-09-04", "text": "CASE #330: 23-year old female from Brgy Gusa; LOCAL CASE; close contact of Case #275; asymptomatic; ongoing expanded contact tracing"},
    { "added": "2020-09-04", "text": "CASE #331: 46-year old female from Brgy 26; LOCAL CASE – APOR; barangay official; complained loss of sense of smell and taste (August 29), throat problem (September 1), watery stool (September 2); consulted at NMMC and swabbed September 2; 7 direct contacts identified"},
    { "added": "2020-09-05", "text": "CASE #332: 50-year old male from Brgy Bugo; LSI from Manila; arrived August 27 via Laguindingan Airport; swabbed September 1; asymptomatic"},
    { "added": "2020-09-05", "text": "CASE #333:  7-year old female from Brgy Tumpagon; LSI from Marikina City; arrived August 27 via Laguindingan Airport; swabbed September 1; asymptomatic"},
    { "added": "2020-09-05", "text": "CASE #334: 42-year old male from Brgy Carmen; LSI from Caloocan City; arrived August 26 via Macabalan Port; swabbed September 1; asymptomatic"},
    { "added": "2020-09-05", "text": "CASE #335: 25-year old male from Brgy Bayabas; LOCAL CASE; son of Case #287; swabbed September 1; had fever while at CIU; expanded contact tracing ongoing"},
    { "added": "2020-09-05", "text": "CASE #336: 62-year old female from Brgy Bayabas; LOCAL CASE; spouse of Case #287; swabbed September 1"},
    { "added": "2020-09-05", "text": "CASE #337: 56-year old male from Brgy Bayabas; LOCAL CASE; masseur of Case #287; swabbed September 1; asymptomatic; 12 close contacts identified"},
    { "added": "2020-09-05", "text": "CASE #338:  6-year old female from Brgy Gusa; LOCAL CASE; daughter of Case #279; swabbed September 1"},
    { "added": "2020-09-05", "text": "CASE #339:  7-year old male from Brgy Gusa; LOCAL CASE; son of Case #279; swabbed September 1"},
    { "added": "2020-09-05", "text": "CASE #340:  9-year old female from Brgy Gusa; LOCAL CASE; daughter of Case #279; swabbed September 1"},
    { "added": "2020-09-05", "text": "CASE #341: 34-year old male from Brgy Gusa; LOCAL CASE; spouse of Case #279; swabbed September 1"},
    { "added": "2020-09-05", "text": "CASE #342: 33-year old female from Brgy Bulua; LOCAL CASE – APOR; healthcare worker at private hospital; exposed to Case #289; had cough and throat discomfort August 24; swabbed September 1; contact tracing ongoing; currently admitted at private hospital"},
    { "added": "2020-09-05", "text": "CASE #343: 33-year old female from Brgy Balulang; LOCAL CASE – APOR; healthcare worker at NMMC; had fever August 28; swabbed September 3; currenty admitted at NMMC; 33 weeks pregnant"},
    { "added": "2020-09-05", "text": "CASE #344: 27-year old female from Brgy Macabalan; LOCAL CASE; admitted at JR Borja City Hospital September 1 (pregnancy due); had cough, colds, swabbed September 1; referred to NMMC September 3; gave birth at NMMC; contact tracing ongoing"},
    { "added": "2020-09-05", "text": "CASE #345: 45-year old female from gated community at Brgy Iponan; LOCAL CASE – APOR; medical representative; developed fever, cough August 26; went to private hospital for consultation August 27; admitted at said hospital and swabbed September 2"},
    { "added": "2020-09-07", "text": "CASE #346: 64-year old male from Brgy CARMEN; LSI from Manila; arrived Aug 28 via Laguindingan Airport; swabbed Sept 2; asymptomatic"},
    { "added": "2020-09-07", "text": "CASE #347: 65-year old female from Brgy TUMPAGON; LSI from Marikina City; arrived Aug 28 via Laguindingan Airport; swabbed Sept 2; asymptomatic; contact tracing ongoing"},
    { "added": "2020-09-07", "text": "CASE #348: 23-year old male from Brgy BULUA; LSI from San Mateo, Rizal; arrived Aug 28 via Laguindingan Airport; swabbed Sept 2; asymptomatic; contact tracing ongoing"},
    { "added": "2020-09-07", "text": "CASE #349: 54-year old female from Brgy NAZARETH; LSI from Manila; arrived Aug 28 via Laguindingan Airport; swabbed Sept 2; asymptomatic"},
    { "added": "2020-09-07", "text": "CASE #350: 52-year old female from Brgy PUNTOD; LSI from Manila; arrived Aug 28 via Laguindingan Airport; swabbed Sep 2; asymptomatic"},
    { "added": "2020-09-07", "text": "CASE #351: 33-year old female from Brgy GUSA; ROF from Singapore; arrived Aug 23 NAIA; arrived Aug 28 via Laguindingan Airport; swabbed Sept 2; asymptomatic"},
    { "added": "2020-09-07", "text": "CASE #352: 30-year old female from Brgy BAYABAS; ROF from Middle East; arrived Aug 28 via Laguindingan Airport; swabbed Sept 2; asymptomatic"},
    { "added": "2020-09-07", "text": "CASE #353: 29-year old male from Brgy PATAG; LSI from Quezon City; arrived Aug 28 via Laguindingan Airport; swabbed Sep 2; asymptomatic"},
    { "added": "2020-09-07", "text": "CASE #354: 24-year old male from Brgy GUSA; LSI from Antipolo City; arrived Aug 28 via Laguindingan Airport; swabbed Sep 2; asymptomatic"},
    { "added": "2020-09-07", "text": "CASE #355: 24-year old female from Brgy BULUA; LSI from Cebu City; arrived Aug 28 via Macabalan Port; swabbed Sep 2; asymptomatic"},
    { "added": "2020-09-07", "text": "CASE #356: 33-year old male from Brgy MACABALAN; LOCAL CASE; close contact of Case #277; swabbed Sep 2"},
    { "added": "2020-09-07", "text": "CASE #357: 61-year old female from Brgy MACABALAN; LOCAL CASE; close contact of Case #277; swabbed sep 2; asymptomatic"},
    { "added": "2020-09-07", "text": "CASE #358: 39-year old male from Brgy TABLON; LOCAL CASE; workplace close contact of Case #277; swabbed Sep 2; contact tracing ongoing"},
    { "added": "2020-09-07", "text": "CASE #359: 38-year old male from gated community in Brgy CARMEN; LOCAL CASE – APOR; had fever Aug 31; swabbed Sep 2; asymptomatic; expanded contact tracing ongoing"},
    { "added": "2020-09-07", "text": "CASE #360: 29-year old female from Brgy 27; LOCAL CASE – APOR; swab test Aug 25 at private institution; repeat swab test Sep 4"},
    { "added": "2020-09-07", "text": "CASE #361: 30-year old male from Brgy 27; LOCAL CASE – APOR; spouse of #360; swab test Aug 25 at private institution; repeat swab test Sep 4; has allergic rhinitis"},
    { "added": "2020-09-07", "text": "CASE #362: 31-year old male from gated community in Brgy LUMBIA; LOCAL CASE – APOR; had nasal congestion, throat discomfort Sep 3; swabbed Sep 4; has hypertension with maintenance; 2 family close contacts"},
    { "added": "2020-09-07", "text": "CASE #363: 21-year old female from Brgy AGUSAN; LOCAL CASE – APOR; healthcare worker at private hospital; developed symptoms Aug 28; swabbed Sep 3; 3 close contacts identified"},
    { "added": "2020-09-07", "text": "CASE #364: 83-year old male from Brgy CUGMAN; LOCAL CASE; had cough Aug 29; admitted private hospital and diagnosed with pneumonia; had fever Aug 30, swabbed Sep 3; referred to NMMC; has hypertension; 10 close contacts identified; further contact tracing ongoing"},
    { "added": "2020-09-07", "text": "CASE #365: 37-year old male from Brgy INDAHAG; LOCAL CASE – APOR; rescuer; developed nasal congestion Sep 3; swabbed Sep 3; workplace contact tracing ongoing"},
    { "added": "2020-09-07", "text": "CASE #366: 29-year old female from Brgy PATAG; LOCAL CASE – APOR; nasal congestion and cough Aug 25; swabbed Aug 25 (negative), repeat swab test Sep 4; 7 close contacts identified; further contact tracing ongoing"},
    { "added": "2020-09-07", "text": "CASE #367: 69-year old female from Brgy BULUA; LOCAL CASE; experienced body weakness Aug 31, throat discomfort Sep 1, colds, dry cough, shortness of breath Sep 4; admitted at private hospital Sep 4; referred to NMMC; swabbed Sep 4; has hypertension, diabetes mellitus; 4 family close contacts identified"},
    { "added": "2020-09-07", "text": "CASE #368: 33-year old male from Brgy KAUSWAGAN; LSI from Cebu; arrived Aug 29 via CDO Port; swabbed Sep 3; asymtomatic"},
    { "added": "2020-09-07", "text": "CASE #369: 38-year old female from Brgy KAUSWAGAN; ROF from Middle East; arrived Aug 25 NAIA; arrived Aug 29 via Laguindingan Airport; swabbed Sep 3; asymptomatic"},
    { "added": "2020-09-07", "text": "CASE #370: 30-year old male; LOCAL CASE – APOR; close contact of Case #314; had fever Aug 29; had chills Sep 3; isolated at private hospital; swabbed Sep 4; contact tracing ongoing"},
    { "added": "2020-09-07", "text": "CASE #371: 62-year old female from Brgy 24; LOCAL CASE – APOR; had fever, cough Aug 31, shortness of breath Sep 4; admitted at JR Borja City Hospital; swabbed Sep 5; referred to NMMC; 9 close contacts identified"},
    { "added": "2020-09-07", "text": "CASE #372: 68-year old male from Brgy TABLON; LOCAL CASE; attended family gathering Aug 30; had fever, cough, dry throat Sep 3; admitted at private hospital Sep 5; swabbed Sep 5; further contact tracing ongoing; 8 close contacts identified"},
    { "added": "2020-09-07", "text": "CASE #373: 71-year old male from Brgy KAUSWAGAN; LOCAL CASE; father of Case #310; had fever, cough Sep 3; admitted at NMMC; swabbed Sep 3; post stroke; 4 family close contacts identified; further contact tracing ongoing"},
    { "added": "2020-09-08", "text": "CASE #374: 41-year old male from Brgy LUMBIA; LSI from Taguig City; arrived Aug 30 via Laguindingan Airport; swabbed Sep 4"},
    { "added": "2020-09-08", "text": "CASE #375: 24-year old female from Brgy BALULANG; LSI from Cebu City; arrived Aug 30 via CDO Port; swabbed Sep 4; asymptomatic; contact tracing ongoing"},
    { "added": "2020-09-08", "text": "CASE #376: 26-year old male from Brgy CARMEN; ROF from Japan; arrived Aug 26 via NAIA; arrived Aug 30 via Laguindingan Airport; swabbed Sep 3; asymptomatic"},
    { "added": "2020-09-08", "text": "CASE #377: 36-year old male from Brgy BALULANG; LSI from Cebu City; arrived Aug 30 via CDO Port; swabbed Sep 4; asymptomatic; has uncontrolled hypertension; contact tracing ongoing"},
    { "added": "2020-09-08", "text": "CASE #378: 47-year old male from Brgy CUGMAN; LSI from Cebu City; arrived Aug 30 via CDO Port; swabbed Sep 4; asymptomatic; contact tracing ongoing"},
    { "added": "2020-09-08", "text": "CASE #379: 23-year old male from BRGY 26; LSI from Bacolod City; arrived Aug 29 via CDO Port; swabbed Sep 3; had abdominal pain, colds and diarrhea prior to travel to CDO"},
    { "added": "2020-09-08", "text": "CASE #380: 26-year old male from Brgy BUGO; LSI from Taguig City; arrived Aug 29 via Laguindingan Airport; swabbed Sep 3; asymptomatic"},
    { "added": "2020-09-08", "text": "CASE #381: 24-year old male from Brgy TABLON; LSI from Cebu City; arrived Aug 29 via CDO Port; swabbed Sep 3; asymptomatic"},
    { "added": "2020-09-08", "text": "CASE #382: 24-year old male from Brgy BONBON; LSI from Antique; arrived Aug 29 via CDO Port; swabbed Sep 3; asymptomatic"},
    { "added": "2020-09-08", "text": "CASE #383: 30-year old female from Brgy KAUSWAGAN; LSI from Makati City; arrived Aug 29 via Laguindingan Airport; swabbbed Sep 4; asymptomatic"},
    { "added": "2020-09-08", "text": "CASE #384: 22-year old female from Brgy KAUSWAGAN; LSI from Taguig City; arrived Aug 29 via Laguindingan Airport; swabbed Sep 3; asymptomatic"},
    { "added": "2020-09-08", "text": "CASE #385: 31-year old female from Brgy KAUSWAGAN; LOCAL CASE – APOR; healthcare worker at NMMC; had fever, chills (Aug 21), body malaise and weakness (Sep 1), loss of sense of taste, smell (Sep 4); swabbed Sep 5; 1 close contact identified; contact tracing ongoing"},
    { "added": "2020-09-08", "text": "CASE #386: 51-year old female from gated subdivision at Brgy CAMAMAN-AN; LOCAL CASE – APOR; healthcare worker at private hospital; exposed to Case #314; swabbed Sep 5; currently at isolation facility of private hospital; asymptomatic; close family contacts identified; work place contact tracing ongoing"},
    { "added": "2020-09-08", "text": "CASE #387: 60-year old male from Brgy BALULANG; LOCAL CASE; vendor at transport terminal; admitted Sep 4 at private hospital due to fever, cough, vomiting; swabbed Sep 5; referred to NMMC; close contacts identified; ongoing workplace contact tracing"},
    { "added": "2020-09-08", "text": "CASE #388: 61-year old male from Brgy GUSA; LOCAL CASE; cancer patient; developed symptoms (Aug 27); cough (Aug 28), admitted private hospital due to difficulty in breathing (Sep 4); swabbed Sep 6; expired Sep 6; 3 close family contacts identified"},
    { "added": "2020-09-08", "text": "CASE #389: 25-year old male from Bellevue Subd., UPPER CARMEN; LOCAL CASE – APOR; tested positive swab test in Manila (Aug 1); under home quarantine in Manila (Aug 17-30); swabbed Sep 6 by private testing facility"},
    { "added": "2020-09-08", "text": "CASE #390: 24-year old female from gated community in Brgy BALULANG; LOCAL CASE; works at a private company; had fever Aug 29; currently at self isolation; swabbed Sep 4 by private testing facility"},
    { "added": "2020-09-09", "text": "CASE #391: 18-year old male from BRGY 32; LSI from Caloocan City; arrived Sep 1 via Laguindingan Airport; swabbed Sep 5; ongoing contact tracing"},
    { "added": "2020-09-09", "text": "CASE #392: 48-year old female from gated community in Brgy PAGATPAT; LOCAL CASE – APOR; healthcare worker; exposed to Case #314; developed fever Sep 2; under self-isolation at home; swabbed Sep 5 at private hospital; 3 direct close contacts identifed; workplace contact tracing ongoing"},
    { "added": "2020-09-09", "text": "CASE #393: 38-year old female from Brgy NAZARETH; LOCAL CASE – APOR; healthcare worker at public hospital in the province; had sore throat (Aug 30); fever, headaches (Sep 1), loss of sense of smell and taste (Sep 3); swabbed Sep 5; 20 close contacts identified; 17 of the close contacts placed under home quarantine"},
    { "added": "2020-09-09", "text": "CASE #394: 77-year old female from Brgy MACABALAN; LOCAL CASE; developed fever Sep 5; consulted at private hospital and swabbed Sep 5; admitted at private hospital; referred to NMMC Sep 8; has hypertension; 10 direct contacts identified"},
    { "added": "2020-09-09", "text": "CASE #395: 53-year old male from Brgy MACASANDIG; LOCAL CASE – APOR; government worker; hosted gathering at house Aug 28; 12 close contacts identified; difficulty breathing Sep 4; consulted at private hospital and swabbed Sep 6; referred to NMMC Sep 8; 12 close contacts identified"},
    { "added": "2020-09-09", "text": "CASE #396: 70-year old female from gated community at Brgy LUMBIA; LOCAL CASE; loss of sense of taste Sep 5; went to private hospital for check up Sep 7; referred to NMMC and swabbed; 1 direct contact identified; contact tracing ongoing"},
    { "added": "2020-09-09", "text": "CASE #397: 67-year old male from BRGY 35; LOCAL CASE; admitted at NMMC Sep 9 due to difficulty in breathing; has hypertenson, diabetes milletus, coronary artery disease"},
    { "added": "2020-09-10", "text": "CASE #398: 22-year old female from BRGY 3; LSI from Makati City; 2 close contacts identified"},
    { "added": "2020-09-10", "text": "CASE #399: 37-year old female from Brgy BUGO; LSI from Quezon City; 1 close contact identified"},
    { "added": "2020-09-10", "text": "CASE #400: 34-year old female from Brgy BALUBAL; LSI from Cebu"},
    { "added": "2020-09-10", "text": "CASE #401: 53-year old male from Brgy GUSA; LSI from Cebu"},
    { "added": "2020-09-10", "text": "CASE #402: 29-year old male from Brgy IPONAN; LSI from Cebu"},
    { "added": "2020-09-10", "text": "CASE #403: 61-year old male from Brgy CARMEN; ROF from Middle East"},
    { "added": "2020-09-10", "text": "CASE #404: 63-year old female from Brgy PAGATPAT; LSI from Bohol"},
    { "added": "2020-09-10", "text": "CASE #405: 28-year old female from Brgy TABLON; ROF from Middle East"},
    { "added": "2020-09-10", "text": "CASE #406: 45-year old male from UPPER CARMEN; ROF from Middle East"},
    { "added": "2020-09-10", "text": "CASE #407: 34-year old male from Brgy TABLON; LSI from Cainta, Rizal"},
    { "added": "2020-09-10", "text": "CASE #408: 23-year old male from Brgy CARMEN; LSI from Cebu"},
    { "added": "2020-09-10", "text": "CASE #409: 10-year old male from Brgy BAYABAS; LOCAL CASE; exposed to Case #337"},
    { "added": "2020-09-10", "text": "CASE #410: 15-year old male from Brgy BUGO; LOCAL CASE; exposed to Case #288"},
    { "added": "2020-09-10", "text": "CASE #411: 28-year old male from Brgy MACABALAN; LOCAL CASE; exposed to Case #344"},
    { "added": "2020-09-10", "text": "CASE #412: 25-year old male from Brgy LUMBIA; LOCAL CASE; exposed to Case #307; 3 close contacts identified"},
    { "added": "2020-09-10", "text": "CASE #413: 11-year old female from Brgy NAZARETH; LOCAL CASE; daughter of Case #313; 4 close contacts identified"},
    { "added": "2020-09-10", "text": "CASE #414: 41-year old female from Brgy KAUSWAGAN; LOCAL CASE – APOR; wife of Case #310; developed symptoms Aug 28, cough Aug 31; 18 close contacts identified"},
    { "added": "2020-09-10", "text": "CASE #415: 14-year old female from Brgy KAUSWAGAN; LOCAL CASE; daughter of Cases #414 and #310; occasional cough Aug 30; 18 close contacts identified"},
    { "added": "2020-09-10", "text": "CASE #416: 10-year old male from Brgy KAUSWAGAN; LOCAL CASE; son of Cases #414 and #310"},
    { "added": "2020-09-10", "text": "CASE #417:  3-year old female from Brgy INDAHAG; LOCAL CASE; daughter of Case #314"},
    { "added": "2020-09-10", "text": "CASE #418: 19-year old female from Brgy INDAHAG; LOCAL CASE; cousin of Case #314"},
    { "added": "2020-09-10", "text": "CASE #419: 41-year old male from Brgy INDAHAG; LOCAL CASE; husband of Case #314"},
    { "added": "2020-09-10", "text": "CASE #420: 29-year old male from Brgy KAUSWAGAN; LOCAL CASE – APOR; govt employee; travelled to MisOcc (returned to CDO Aug 28 via private vehicle); had symptoms Aug 31; 42 close contacts identified (5 household members, 14 relatives and guests, 2 close fiends, 21 workplace)"},
    { "added": "2020-09-10", "text": "CASE #421: 46-year old male from BRGY 26; LOCAL CASE – APOR; exposed to Case #331; hosted house gathering Aug 25; had symptoms Aug 27; had headache, loss of sense of taste and smell Aug 28"},
    { "added": "2020-09-10", "text": "CASE #422: 65-year old male from Brgy IPONAN; LOCAL CASE; swabbed August 25 as requirement for travel to Middle East; repeat swab Sep 7; already travelled to Cebu before result was released"},
    { "added": "2020-09-10", "text": "CASE #423: 34-year old female from Brgy IPONAN; LOCAL CASE; daughter of Case #422; 5 close contacts identified; currently coordinating with Lapu-Lapu City health officials"},
    { "added": "2020-09-10", "text": "CASE #424: 66-year old male from Brgy GUSA; LOCAL CASE; had vehicular accident with head and back injury Aug 29; manifested cough Aug 30; currently admitted at NMMC"},
    { "added": "2020-09-10", "text": "CASE #425: 70-year old male from Macanhan, Brgy CARMEN; LOCAL CASE; had cough and shortness of breathing and brought to JRBGH Sep 4; diagnosed with chronic pneumonia"},
    { "added": "2020-09-10", "text": "CASE #426: 34-year old female; LOCAL CASE – APOR; healthcare worker in private hospital; exposed to Case #370; had sore throat August 31"},
    { "added": "2020-09-10", "text": "CASE #427: 28-year old male from Brgy PATAG; LOCAL CASE – APOR; healthcare worker; exposed to Case #344; developed colds Sep 6; 5 close contacts identified"},
    { "added": "2020-09-11", "text": "CASE #428: 30-year old male from Brgy NAZARETH; ROF from Middle East; asymptomatic"},
    { "added": "2020-09-11", "text": "CASE #429: 27-year old male from Brgy CARMEN; LOCAL CASE – APOR; exposed to Case #359; had fever, sore throat Sep 5; 15 close contacts identified"},
    { "added": "2020-09-11", "text": "CASE #430: 27-year old male from Brgy PUNTOD; LOCAL CASE; had fever Sep 5, went to NMMC Sep 8"},
    { "added": "2020-09-11", "text": "CASE #431: 26-year old female from Brgy CARMEN; LOCAL CASE – APOR; exposed to Case #312; worked at NMMC; had fever Sep 6; 4 close contacts identified"},
    { "added": "2020-09-11", "text": "CASE #432: 50-year old female from Brgy MACABALAN; LOCAL CASE – APOR; widow; healthcare worker; exposed to Case #344"},
    { "added": "2020-09-11", "text": "CASE #433:  9-year old female from Brgy KAUSWAGAN; LOCAL CASE; exposed to case #310"},
    { "added": "2020-09-11", "text": "CASE #434: 55-year old female from gated community in Brgy LUMBIA; LOCAL CASE; had fever, chills, headache, occasional cough Sep 8; has hypertension maintenance"},
    { "added": "2020-09-11", "text": "CASE #435: 32-year old female from gated community in Brgy LUMBIA; LOCAL CASE – APOR; daughter of Case #434; has fever, cough, chills; 11 close contacts identified"},
    { "added": "2020-09-11", "text": "CASE #436: 30-year old female from Brgy LAPASAN; LOCAL CASE; pregnant; went to Brgy MCH; had fever, cough Sep 9; referred to NMMC; 4 close contacts identified; asthmatic"},
    { "added": "2020-09-11", "text": "CASE #437: 32-year old male from BRGY 17; LOCAL CASE; travel history to Iligan City Aug 30; has headache Sep 6; went to private testing facility Sep 8"},
    { "added": "2020-09-11", "text": "CASE #438: 53-year old male from gated community in Brgy LUMBIA; LOCAL CASE; exposed to Case #420; went to house of Case #420 to attend party; had fever Sep 1 and LBM succeeding days;admitted at private hospital Sep 8; 3 close contacts identified"},
    { "added": "2020-09-11", "text": "CASE #439: 28-year old male from Brgy MAMBUAYA; LOCAL CASE – APOR; member of AFP; Aug 29 went to Surigao del Sur and returned to Butuan; Aug 30 experienced body weakness; Sep 7 had sore throat and loss of sense of taste and smell; referred and admitted at NMMC"},
    { "added": "2020-09-12", "text": "CASE #440: 30-year old male from BRGY 24; ROF from Middle East"},
    { "added": "2020-09-12", "text": "CASE #441: 24-year old female from Brgy BAYABAS: LSI from Manila"},
    { "added": "2020-09-12", "text": "CASE #442:  5-year old female from Brgy CUGMAN; LOCAL CASE; grandson of Case #364; traveled to Libona; currently coordinating with Libona Libona health officials"},
    { "added": "2020-09-12", "text": "CASE #443: 49-year old female from Brgy NAZARETH; LOCAL CASE; househelp of Case #393"},
    { "added": "2020-09-12", "text": "CASE #444: 45-year old female from Brgy NAZARETH; LOCAL CASE; househelp of Case #393"},
    { "added": "2020-09-12", "text": "CASE #445: 29-year old female from Brgy NAZARETH; LOCAL CASE; sister of Case #393; contact tracing ongoing"},
    { "added": "2020-09-12", "text": "CASE #446: 25-year old female from Brgy NAZARETH; LOCAL CASE; househelp of Case #393"},
    { "added": "2020-09-12", "text": "CASE #447: 17-year old male from Brgy NAZARETH; LOCAL CASE; cousin of Case #393"},
    { "added": "2020-09-12", "text": "CASE #448:  7-year old male from Brgy NAZARETH; LOCAL CASE; son of Case #393; has mild colds"},
    { "added": "2020-09-12", "text": "CASE #449:  3-year old male from Brgy NAZARETH; LOCAL CASE; son of Case #393"},
    { "added": "2020-09-12", "text": "CASE #450:  2-year old male from Brgy NAZARETH; LOCAL CASE; son of Case #393"},
    { "added": "2020-09-12", "text": "CASE #451:  9-year old male from Brgy NAZARETH; LOCAL CASE; son of Case #393"},
    { "added": "2020-09-12", "text": "CASE #452: 34-year old female from Brgy KAUSWAGAN; LOCAL CASE – APOR; healthcare worker at NMMC; exposed to Case #385; had sore throat and fever Sep 8"},
    { "added": "2020-09-12", "text": "CASE #453: 32-year old female from Brgy LAPASAN; LOCAL CASE – APOR; healthcare worker at NMMC; exposed to Case #385; had fever, cough, colds"},
    { "added": "2020-09-14", "text": "CASE #454: 67-year old male from Brgy PAGATPAT; LSI from Laguna; has hypertension, diabetes mellitus"},
    { "added": "2020-09-14", "text": "CASE #455: 17-year old female from Brgy PAGATPAT; LSI from Laguna"},
    { "added": "2020-09-14", "text": "CASE #456: 43-year old male; LOCAL CASE; PDL at Lumbia City Jail; transferred to BJMP CIU; has 15 cellmates"},
    { "added": "2020-09-14", "text": "CASE #457: 69-year old male from Brgy NAZARETH; LOCAL CASE; businessman; had dry cough, fever, lbm, loss of appetite; admitted at private hospital; has hypertension, cardiovascular disease, diabetes mellitus"},
    { "added": "2020-09-14", "text": "CASE #458: 39-year old male from Brgy PUNTOD; LOCAL CASE; family driver; had sinusitis, fever, loss of sense of smell; 5 direct household contacts identified"},
    { "added": "2020-09-14", "text": "CASE #459: 30-year old female from Brgy PUNTOD; LOCAL CASE – APOR; healthcare worker at NMMC; exposed to Case #385 and #452; 5 household direct contacts identified; workplace contact tracing ongoing"},
    { "added": "2020-09-14", "text": "CASE #460: 65-year old male from Brgy CUGMAN; LOCAL CASE; had shortness of breath; admitted at private hospital; referred to NMMC; 5 direct contacts identified; EXPIRED Sep 14"},
    { "added": "2020-09-14", "text": "CASE #461: 42-year old female from gated community at Brgy UPPER BALULANG; LOCAL CASE – APOR; healthcare worker at private hospital; exposed to Case #424; had dryness of throat, shortness of breath; 7 household contacts identified; workplace contact tracing ongoing"},
    { "added": "2020-09-14", "text": "CASE #462: 57-year old male from Brgy LUMBIA; LOCAL CASE; exposed to Case #311; had fever, cough; admitted at private hospital; 6 direct contacts identified"},
    { "added": "2020-09-14", "text": "CASE #463: 44-year old female from Brgy CARMEN; LOCAL CASE; housewife; consulted at private hospital due to fever, cough; referred to NMMC; has diabetes mellitus, hypertension; 5 direct contacts identified"},
    { "added": "2020-09-14", "text": "CASE #464: 30-year old male from Brgy GUSA; ROF from Middle East; asymptomatic"},
    { "added": "2020-09-14", "text": "CASE #465: 30-year old female from Brgy TAGPANGI; ROF from Middle East; asymptomatic"},
    { "added": "2020-09-14", "text": "CASE #466:  1-year old male from Brgy CARMEN; ROF from Middle East; arrived with family"},
    { "added": "2020-09-14", "text": "CASE #467: 50-year old female from Brgy BALULANG; LSI from Quezon City; asymptomatic"},
    { "added": "2020-09-14", "text": "CASE #468: 27-year old female from Brgy NAZARETH; LSI from Cebu City; close contact of Case #268; asymptomatic"},
    { "added": "2020-09-14", "text": "CASE #469: 25-year old male from Brgy UPPER CARMEN; LOCAL CASE – APOR; healthcare worker at private hospital; had loss of sense of taste watery stool; loss of sense of smell; isolated at private hospital"},
    { "added": "2020-09-14", "text": "CASE #470: 22-year old female from Brgy CARMEN; LOCAL CASE; admitted at private hospital due to epigastric pain; 12 direct household contacts identified"},
    { "added": "2020-09-14", "text": "CASE #471: 87-year old male from Brgy CARMEN; LOCAL CASE; businessman; admitted at private hospital; had cough, colds, shortness of breath; has hypertension; 1 direct contact identified; for transfer to NMMC"},
    { "added": "2020-09-14", "text": "CASE #472: 50-year old female from Brgy CARMEN; LOCAL CASE; had cough, shortness of breath; admitted at NMMC; 4 direct household contacts identified"},
    { "added": "2020-09-14", "text": "CASE #473: 71-year old male from Brgy NAZARETH; LOCAL CASE; businessman; exposed to Case #457; admitted at NMMC due to shortness of breath; has hypertension, diabetes mellitus; 9 direct contacts identified; workplace contact tracing ongoing"},
    { "added": "2020-09-14", "text": "CASE #474: 31-year old male from gated community in Brgy BALULANG; LOCAL CASE – APOR; govt employee; travel history to Cotabato and Marawi; complained of loss of sense of smell, taste; 15 household contacts identified; workplace contact tracing ongoing"},
    { "added": "2020-09-14", "text": "CASE #475: 38-year old female from gated community at Brgy IPONAN; LOCAL CASE; worker at private food chain company; developed sore throat; admitted at private hospital; 4 direct household contacts identified"},
    { "added": "2020-09-14", "text": "CASE #476: 37-year old female from Brgy CANITOAN; LOCAL CASE; online seller; admitted at private hospital; has cough, fever"},
    { "added": "2020-09-15", "text": "CASE #477: 34-year old male from Brgy TABLON; LOCAL CASE; son of Case #372; 6 workplace contacts identified"},
    { "added": "2020-09-15", "text": "CASE #478: 85-year old male from Brgy LAPASAN; LOCAL CASE; had fever, body malaise, shortness of breath; admitted at private hospital; 15 close contacts identified; for transfer to NMMC"},
    { "added": "2020-09-15", "text": "CASE #479: 52-year old male from gated subdivision at Brgy CARMEN; LOCAL CASE; complained of throat discomfort and had fever; admitted at private hospital; swabbed as requirement for elective surgery; 3 direct contacts identified; contact tracing ongoing"},
    { "added": "2020-09-15", "text": "CASE #480: 66-year old male from Brgy LAPASAN; LOCAL CASE; admitted at JR Borja General Hospital; had intermittent fever and cough, epigastric pain, difficulty in breathing; for transfer to NMMC"},
    { "added": "2020-09-15", "text": "CASE #481: 83-year old male form Brgy PAGATPAT; LOCAL CASE; admitted at JR Borja General Hospital; had cough, generalized weakness, loss of appetite, diagnosed with chronic kidney disease secondary to hypertensive hypertensive nephropathy related to community acquired pneumonia; referred to NMMC; contact tracing ongoing; EXPIRED Sep 14"},
    { "added": "2020-09-15", "text": "CASE #482: 94-year old female from Brgy 35; LOCAL CASE; admitted at NMMC; had fever, cough; residing near Contained Area in said Brgy; further contact tracing ongoing"},
    { "added": "2020-09-15", "text": "CASE #483: 36-year old female from Brgy TABLON; LOCAL CASE – APOR; healthcare worker at NMMC; contact tracing ongoing"},
    { "added": "2020-09-16", "text": "CASE #484: 24-year old male from Brgy BALULANG; LSI from Pasay City; had colds, loss of sense of taste"},
    { "added": "2020-09-16", "text": "CASE #485: 51-year old female from Brgy TABLON; LSI from Cebu City; has hypertension with medication; asymptomatic"},
    { "added": "2020-09-16", "text": "CASE #486: 32-year old male from Brgy 24; LOCAL CASE; son of Case #371; had colds and cough; 4 family close contacts identified"},
    { "added": "2020-09-16", "text": "CASE #487: 22-year old male from Brgy 26; LOCAL CASE; son of Case #421"},
    { "added": "2020-09-16", "text": "CASE #488: 71-year old female from Brgy KAUSWAGAN; LOCAL CASE; exposed to Case #373; 19 direct contacts identified"},
    { "added": "2020-09-16", "text": "CASE #489: 57-year old female from Brgy KAUSWAGAN; LOCAL CASE; sister of Case #373"},
    { "added": "2020-09-16", "text": "CASE #490: 40-year old female from Brgy KAUSWAGAN; LOCAL CASE; daughter-in-law of Case #373"},
    { "added": "2020-09-16", "text": "CASE #491: 55-year old female from Brgy LAPASAN; LOCAL CASE; healthcare worker; exposed to Case #436; had cough, difficulty in breathing; 7 direct contacts identified"},
    { "added": "2020-09-16", "text": "CASE #492: 28-year old male from gated community in Brgy BALULANG; LOCAL CASE; had fever, body pain, loss of sense of smell and taste, dififculty of breathing; admitted at NMMC; 5 direct contacts identified"},
    { "added": "2020-09-16", "text": "CASE #493: 67-year old female from Brgy CARMEN; LOCAL CASE; had fever, cough; admitted at NMMC; contact tracing ongoing"},
    { "added": "2020-09-16", "text": "CASE #494: 61-year old male from Brgy AGUSAN; LOCAL CASE; had history of travel to Butuan City (work-related); brought to private hospital due to difficulty in breathing; transferred to NMMC; EXPIRED Sep 13; 10 close contacts identified"},
    { "added": "2020-09-16", "text": "CASE #495: 25-year old male from Brgy CARMEN; LOCAL CASE; son of Case #471; had fever, colds; 4 direct contacts identified"},
    { "added": "2020-09-16", "text": "CASE #496: 30-year old female from Brgy BULUA; LOCAL CASE; househelp of Case #471"},
    { "added": "2020-09-16", "text": "CASE #497: 69-year old female from Brgy PATAG; LOCAL CASE; had fever, epigastric pain, loss of appetite; admitted at private hospital"},
    { "added": "2020-09-17", "text": "CASE #498: 27-year old male from Brgy PUNTOD; LSI from Quezon City; contact tracing ongoing"},
    { "added": "2020-09-17", "text": "CASE #499: 9-year old male from Brgy CARMEN; LSI from Malabon"},
    { "added": "2020-09-17", "text": "CASE #500: 5-year old male from Brgy CARMEN; LSI from Tacloban City; asymptomatic; 3 close contacts identified"},
    { "added": "2020-09-17", "text": "CASE #501: 30-year old female from Brgy PATAG; LOCAL CASE – APOR; exposed to a COVID 19 patient in Butuan City; quarantined in Butuan Sept 7; returned to CDO; developed symptoms Sep 12; sought medical consultation and admitted at Camp Evangelista Station Hospital; 1 close contact identified (husband)"},
    { "added": "2020-09-17", "text": "CASE #502: 59-year old male from Brgy LAPASAN; LOCAL CASE; admitted at private hospital; scheduled for surgery; 2 household contacts idendtified"},
    { "added": "2020-09-17", "text": "CASE #503: 83-year old female from Brgy CAMAMAN-AN; LOCAL CASE; admitted at private hospital; complained of shortness of breath; referred to NMMC; 4 close contacts identified"},
    { "added": "2020-09-17", "text": "CASE #504: 39-year old male from Brgy CARMEN; LOCAL CASE; swabbed voluntarily as company work requirement; 4 household contacts identified"},
    { "added": "2020-09-17", "text": "CASE #505: 36-year old female from Brgy CANITOAN; LOCAL CASE – APOR; healthcare worker at private hospital; exposed to Case #461 and #424; had fever; currently admitted at private hospital; 3 household contacts identified"},
    { "added": "2020-09-17", "text": "CASE #506: 46-year old female from Brgy GUSA; LOCAL CASE – APOR; healthcare worker from NMMC; exposed to Case #361 and #366; had fever, cough, colds; admitted at NMMC; 2 household contacts identified"},
    { "added": "2020-09-17", "text": "CASE #507: 67-year old male from Brgy CARMEN; LOCAL CASE; referred by JR Borja General Hospital to NMMC and currently admitted; 5 household contacts identified"},
    { "added": "2020-09-18", "text": "CASE #508: 60-year old male from Brgy CANITOAN; LSI from Manila; asymptomatic"},
    { "added": "2020-09-18", "text": "CASE #509: 22-year old female; ROF from Middle East; asymptomatic"},
    { "added": "2020-09-18", "text": "CASE #510: 21-year old female; LSI from Quezon City; asymptomatic"},
    { "added": "2020-09-18", "text": "CASE #511: 23-year old male from Brgy CARMEN; LOCAL CASE; IT specialist; supposed entry to Camiguin; tested positive via RDT Sep 8; traveled to MisOr"},
    { "added": "2020-09-18", "text": "CASE #512: 35-year old female from Brgy NAZARETH; LOCAL CASE – APOR; healthcare worker assigned at DOH; in isolation since Sep 12; developed anosmia (loss of sense of smell), body malaise, itchy throat, lbm; 10 close contacts identified; further contact tracing ongoing"},
    { "added": "2020-09-18", "text": "CASE #513: 57-year old male from Brgy BULUA; LOCAL CASE; exposed to Case #424; watcher of Case #424 admitted at private hospital; 3 close contacts identified"},
    { "added": "2020-09-18", "text": "CASE #514: 59-year old female from Brgy BULUA; LOCAL CASE; wife of Case #513; watcher of Case #424 admitted at private hospital"},
    { "added": "2020-09-18", "text": "CASE #515: 39-year old female; LOCAL CASE; employed at private company; work-from-home since Sep 4; complained of cough, fever"},
    { "added": "2020-09-18", "text": "CASE #516: 24-year old female from Brgy LUMBIA; LOCAL CASE – APOR; social worker exposed to Case #462; 7 household and 23 workplace contacts identified"},
    { "added": "2020-09-18", "text": "CASE #517: 74-year old male from Brgy 17; LOCAL CASE; admitted at NMMC; 3 household contacts identified; further contact tracing ongoing"},
    { "added": "2020-09-18", "text": "CASE #518: 66-year old male from Brgy BULUA; LOCAL CASE – APOR; security officer of a power company in MisOr; admitted at NMMC; had cough and colds; 7 direct contacts identified"},
    { "added": "2020-09-19", "text": "CASE #519: 19-year old female from Brgy INDAHAG; LSI from Cebu City; student; asymptomatic"},
    { "added": "2020-09-19", "text": "CASE #520: 44-year old male from Numbered BRGY; ROF from Hong Kong; asymptomatic"},
    { "added": "2020-09-19", "text": "CASE #521: 22-year old male from Brgy GUSA; LSI from Marikina City; asymptomatic"},
    { "added": "2020-09-19", "text": "CASE #522: 31-year old male from Brgy CUGMAN; ROF from Middle East; asymptomatic"},
    { "added": "2020-09-19", "text": "CASE #523: 25-year old female from Brgy IPONAN; ROF from Middle East; asymptomatic"},
    { "added": "2020-09-19", "text": "CASE #524: 29-year old male from Brgy CAMAMAN-AN; LSI from Taguig City; hypertensive with maintenance; asymptomatic; 1 close contact identified"},
    { "added": "2020-09-19", "text": "CASE #525: 43-year old male from Brgy CAMAMAN-AN; ROF from Middle East; asymptomatic"},
    { "added": "2020-09-19", "text": "CASE #526:  1-year old male from Brgy BUGO; LOCAL CASE; close contact of Case #380"},
    { "added": "2020-09-19", "text": "CASE #527: 24-year old female from Brgy BUGO; LOCAL CASE: close contact of Case #380"},
    { "added": "2020-09-19", "text": "CASE #528: 58-year old male from Brgy CUGMAN; LOCAL CASE – APOR; govt worker in Prov. of Bukidnon; developed cough, colds; admitted at JRBGH; 3 close contacts identified"},
    { "added": "2020-09-19", "text": "CASE #529: 44-year old male from Brgy CARMEN; LOCAL CASE – APOR; healthcare worker at NMMC; had fever; 5 household contacts identified"},
    { "added": "2020-09-19", "text": "CASE #530: 33-year old male from Brgy KAUSWAGAN; LOCAL CASE – APOR; AFP member; traveled to Butuan Sept 1 (work assignment); developed symptoms Sept 2; had fever Sept 5; in isolation at Camp Evangelista Station Hospital; contact tracing still ongoing"},
    { "added": "2020-09-19", "text": "CASE #531: 64-year old female from Brgy CARMEN; LOCAL CASE – APOR; developed throat discomfort Sep 6; 24 workplace contacts identified"},
    { "added": "2020-09-19", "text": "CASE #532: 40-year old female from Brgy PUNTOD; LOCAL CASE; common-law partner of Case #458; asymptomatic"},
    { "added": "2020-09-19", "text": "CASE #533: 10-year old male from Brgy PUNTOD; LOCAL CASE; son of Case #458"},
    { "added": "2020-09-19", "text": "CASE #534:  5-year old male from Brgy PUNTOD; LOCAL CASE; son of Case #458"},
    { "added": "2020-09-19", "text": "CASE #535: 69-year old female from Brgy PUNTOD; LOCAL CASE; mother of Case #458"},
    { "added": "2020-09-19", "text": "CASE #536: 56-year old male from Brgy KAUSWAGAN; LOCAL CASE; businessman; developed fever, chills, body malaise Sep 9; had cough with blood Sep. 15; admitted at private hospital; 6 household contacts identified; 2 workplace contacts identified; further contact tracing still ongoing"},
    { "added": "2020-09-19", "text": "CASE #537: 63-year old female from Brgy BULUA; LOCAL CASE; wife of Case #518"},
    { "added": "2020-09-19", "text": "CASE #538: 29-year old female from Brgy BULUA; LOCAL CASE; daughter of Case #518; developed sore throat Sep 17; ongoing workplace contact tracing"},
    { "added": "2020-09-19", "text": "CASE #539: 35-year old female form numbered BRGY; LOCAL CASE; worker of private company; had fever, cough; diagnosed with pneumonia; 7 household contacts identified; workplace contact tracing still ongoing"},
    { "added": "2020-09-19", "text": "CASE #540: 68-year old male from Brgy MACASANDIG; LOCAL CASE; retired AFP member and businessman; attended wedding Sep 8; attended burial Sep 11; had fever Sep 12; developed cough; consulted at private hospital; had dysuria and cathetered; 7 household contacts identified; further contact tracing still ongoing"},
    { "added": "2020-09-19", "text": "CASE #541: 34-year old male from Brgy IPONAN; LOCAL CASE; husband of Case #475; 3 household contacts identified" },
    { "added": "2020-09-21", "text": "CASE #542: 21-year old female from Brgy IPONAN; LSI from Cebu City; asymptomatic; contact tracing still ongoing"},
    { "added": "2020-09-21", "text": "CASE #543: 20-year old female from Brgy INDAHAG; LSI from Manila; 2 close contacts identified"},
    { "added": "2020-09-21", "text": "CASE #544: 41-year old male from Brgy TIGNAPOLOAN; LSI from Manila; arrived by boat Sept 8; contact tracing still ongoing"},
    { "added": "2020-09-21", "text": "CASE #545: 32-year old male from Brgy KAUSWAGAN; LSI from Mandaluyong City"},
    { "added": "2020-09-21", "text": "CASE #546: 50-year old male from Brgy CUGMAN; LOCAL CASE; son of Case #364; has high blood"},
    { "added": "2020-09-21", "text": "CASE #547: 81-year old female from Brgy CUGMAN; LOCAL CASE; wife of case #364"},
    { "added": "2020-09-21", "text": "CASE #548: 51-year old female; LOCAL CASE – APOR; healthcare worker; daughter-in-law of Case #364; 3 household contacts identified"},
    { "added": "2020-09-21", "text": "CASE #549: 10-year old female from Brgy NAZARETH; LOCAL CASE; sister of Case #413"},
    { "added": "2020-09-21", "text": "CASE #550: 62-year old female from Brgy TABLON; LOCAL CASE; wife of Case #372"},
    { "added": "2020-09-21", "text": "CASE #551: 30-year old male from Brgy TUMPAGON; LSI from Marikina City; exposed to Case #333"},
    { "added": "2020-09-21", "text": "CASE #552: 10-year old female from gated subd in Brgy IPONAN; LOCAL CASE; daughter of Case #475"},
    { "added": "2020-09-21", "text": "CASE #553: 4-year old female from gated subd in Brgy IPONAN; LOCAL CASE; daughter of Case #475"},
    { "added": "2020-09-21", "text": "CASE #554: 41-year old female from Brgy CUGMAN; LOCAL CASE; daughter of Case #460"},
    { "added": "2020-09-21", "text": "CASE #555: 32-year old male from Brgy CUGMAN; LOCAL CASE – APOR; exposed to Iligan and Manticao co-workers at depot in Iligan"},
    { "added": "2020-09-21", "text": "CASE #556: 50-year old male from UPPER CARMEN; LOCAL CASE – APOR; healthcare worker at NMMC"},
    { "added": "2020-09-21", "text": "CASE #557: 64-year old female from Brgy CUGMAN; LOCAL CASE; wife of Case #460"},
    { "added": "2020-09-21", "text": "CASE #558: 28-year old female from Brgy TABLON; LOCAL CASE; wife of Case #477; 8-months pregnant"},
    { "added": "2020-09-21", "text": "CASE #559: 25-year old female from gated comunity in Brgy IPONAN; LOCAL CASE; exposed to Cases #422 and #423 (in isolation at Lapu-Lapu City); 2 household contacts identified"},
    { "added": "2020-09-21", "text": "CASE #560: 24-year old male from gated comunity in Brgy IPONAN; LOCAL CASE; exposed to Cases #422 and #423 (in isolation at Lapu-Lapu City); brother of Case #559"},
    { "added": "2020-09-21", "text": "CASE #561: 83-year old female from UPPER BALULANG; LOCAL CASE; admitted at private hospital due to cough, fever, loss of appetite; EXPIRED Sept. 20; 7 household contacts identified"},
    { "added": "2020-09-21", "text": "CASE #562: 32-year old female from Brgy BONBON; LOCAL CASE – APOR; admitted at private hospital due to fever, headache; diagnosed with UTI; 3 household contacts identified"},
    { "added": "2020-09-21", "text": "CASE #563: 51-year old female from gated community in Brgy KAUSWAGAN; LOCAL CASE – APOR; admitted at private hospital due to cough, fever, body weakness, LBM; 2 household contacts identified; contact tracing ongoing"},
    { "added": "2020-09-21", "text": "CASE #564: 29-year old female from Brgy LAPASAN; LOCAL CASE; swabbed for travel purpose (abroad); asymptomatic"},
    { "added": "2020-09-21", "text": "CASE #565: 25-year old male from Brgy MACASANDIG; LOCAL CASE; travel history to Bukidnon; had fever, loss of sense of smell/taste; admitted at private hospital; 8 household contacts identified"},
    { "added": "2020-09-21", "text": "CASE #566: 46-year old female from Brgy MACASANDIG; LOCAL CASE; admitted at private hospital due to kidney failure mgt"},
    { "added": "2020-09-21", "text": "CASE #567: 22-year old female; LOCAL CASE – APOR; healthcare worker; exposed to patient (tagged outside CDO) at private hospital; developed loss of sense of taste; 4 direct household contacts and 9 workplace contacts (laboratory) identified"},
    { "added": "2020-09-21", "text": "CASE #568: 59-year old female from gated community in Brgy GUSA; LOCAL CASE; admitted at private hospital for hemodialysis; has diabetes milletus, hypertension; EXPIRED Sept. 19; 3 direct contacts identified"},
    { "added": "2020-09-21", "text": "CASE #569: 28-year old female from Brgy TABLON; LOCAL CASE – APOR; healthcare worker; exposed to Case #505; had fever, cough, colds; in isolation at private hospital"},
    { "added": "2020-09-21", "text": "CASE #570: 25-year old female from Brgy CARMEN; LOCAL CASE – APOR; healthcare worker; developed fever, back ache; in isolation at private hospital; 5 household contacts identified; workplace contact tracing still ongoing"},
    { "added": "2020-09-21", "text": "CASE #571: 71-year old male from Brgy KAUSWAGAN; LOCAL CASE; had fever, loss of appetite; admitted at private hospital; 5 household contacts identified"},
    { "added": "2020-09-21", "text": "CASE #572: 76-year old female from UPPER BALULANG; LOCAL CASE; had cough, fever, shortness of breath; 6 direct household contacts identified; EXPIRED Sept 21 at NMMC"},
    { "added": "2020-09-21", "text": "CASE #573: 41-year old female from Brgy KAUSWAGAN; LOCAL CASE – APOR; healthcare worker at NMMC; exposed to Case #343; had fever"},
    { "added": "2020-09-21", "text": "CASE #574: 39-year old male from Brgy CARMEN; LOCAL CASE; had cough, difficulty in breathing; EXPIRED Sept. 19 at NMMC (Dead on Arrival at ER), post mortem swab"},
    { "added": "2020-09-21", "text": "CASE #575: 57-year old female from Brgy MACASANDIG; LOCAL CASE – APOR; exposed to Case #518; 3 direct contacts identified; at DOH isolation facility"},
    { "added": "2020-09-21", "text": "CASE #576: 41-year old male from gated community in Brgy LUMBIA; LOCAL CASE – APOR; healthcare worker at NMMC; admitted at NMMC due to fever, cough"},
    { "added": "2020-09-21", "text": "CASE #577: 24-year old female from Brgy NAZARETH; LOCAL CASE; had fever, dizziness, difficulty in breathing; sought teleconsult at NMMC; admitted at NMMC; 3 direct contacts identified"},
    { "added": "2020-09-21", "text": "CASE #578: 21-year old female from Brgy NAZARETH; LOCAL CASE; had fever, cough; 3 close contacts identified"},
    { "added": "2020-09-21", "text": "CASE #579: 80-year old female from Brgy PUNTOD; LOCAL CASE; generalized body malaise; 9 direct contacts identified"},
    { "added": "2020-09-21", "text": "CASE #580: 51-year old male from gated community in UPPER BALULANG; LOCAL CASE; complained of body malaise; admitted at NMMC; EXPIRED Sept. 20; 2 direct contacts identified"},
    { "added": "2020-09-21", "text": "CASE #581: 3-year old female from Brgy LUMBIA; LOCAL CASE; daughter of Case #462; asymptomatic"},
    { "added": "2020-09-21", "text": "CASE #582: 37-year old female from Brgy MACASANDIG; LOCAL CASE; exposed to Case #462; asymptomatic"},
    { "added": "2020-09-22", "text": "CASE #583: 43-year old female from Brgy CARMEN; LSI from Talisay, Cebu; arrived Sept 11 via Macabalan Port"},
    { "added": "2020-09-22", "text": "CASE #584: 48-year old female; LOCAL CASE; exposed to Case #470; 7 close contacts identified"},
    { "added": "2020-09-22", "text": "CASE #585: 27-year old female from BRGY 14; LOCAL CASE; had fever, cough; 4 direct contacts identified"},
    { "added": "2020-09-22", "text": "CASE #586: 19-year old female from Brgy GUSA; LOCAL CASE; had fever, cough, loss of sense of taste, smell"},
    { "added": "2020-09-22", "text": "CASE #587: 27-year old male; LOCAL CASE – APOR; healthcare worker at NMMC; exposed to Case #556; 1 household contact identified; workplace contact tracing ongoing; currently at DOH isolation facility"},
    { "added": "2020-09-22", "text": "CASE #588: 27-year old male from gated community at Brgy KAUSWAGAN; LOCAL CASE – APOR; pharmacist; had fever, cough, colds, body malaise; 9 direct household contacts identified; currently at DOH isolation facility"},
    { "added": "2020-09-22", "text": "CASE #589: 27-year old female from Brgy. KAUSWAGAN; LOCAL CASE – APOR; wife of Case #588; healthcare worker at private hospital; had fever, cough and colds; currently at DOH isolation facility"},
    { "added": "2020-09-22", "text": "CASE #590: 1-year old female from Brgy KAUSWAGAN; LOCAL CASE; daughter of Case #588; had fever; currently at DOH isolation facility"},
    { "added": "2020-09-22", "text": "CASE #591: 23-year old female from Brgy KAUSWAGAN; LOCAL CASE; househelp of Case #588; currently at DOH isolation facility"},
    { "added": "2020-09-22", "text": "CASE #592: 53-year old male from Brgy CARMEN; LOCAL CASE – APOR; had fever, cough, colds, loss of sense of taste & smell; brought to DOH isolation facility"},
    { "added": "2020-09-22", "text": "CASE #593: 78-year old female from Brgy CARMEN; LOCAL CASE; was admitted at private hospital due to hypoglycemia, diabetes mellitus; discharged Sept 14 but had loss of appetite; re-admitted at private hospital; 6 household contacts identified"},
    { "added": "2020-09-22", "text": "CASE #594: 76-year old male from NUMBERED BRGY; LOCAL CASE; admitted at private hospital; went to farm in MisOr (1 week); returned to CDO and complained of shortness of breath; 4 close contacts identified"},
    { "added": "2020-09-22", "text": "CASE #595: 26-year old male from KAUSWAGAN; LOCAL CASE – APOR; had work at Lanao del Sur; returned to CDO with cough; admitted at private hospital"},
    { "added": "2020-09-22", "text": "CASE #596: 38-year old female from Brgy MACABALAN; LOCAL CASE; admitted at private hospital due to vomitting; referred to NMMC; 8 direct contacts identified"},
    { "added": "2020-09-22", "text": "CASE #597: 61-year old male from Brgy AGUSAN; LOCAL CASE; had dry cough, body malaise, shortness of breath; has asthma, hypertension"},
    { "added": "2020-09-22", "text": "CASE #598: 32-year old female from Brgy CARMEN; LOCAL CASE; attended party Sept 10; developed loss of sense of smell; 17 direct contacts identified"},
    { "added": "2020-09-23", "text": "CASE #599: 83-year old male from Brgy LAPASAN; LOCAL CASE; had fever and cough; admitted at private hospital; 6 household contacts identified"},
    { "added": "2020-09-23", "text": "CASE #600: 20-year old female from gated community in UPPER BALULANG; LOCAL CASE; granddaughter of Case #572; swabbed in Bukidnon due to fever and colds"},
    { "added": "2020-09-23", "text": "CASE #601: 49-year old male from gated community in UPPER BALULANG; LOCAL CASE; family driver of Case #572; swabbed in Bukidnon"},
    { "added": "2020-09-23", "text": "CASE #602: 49-year old male from gated community in UPPER BALULANG; LOCAL CASE; son of Case #572; swabbed in Bukidnon"},
    { "added": "2020-09-23", "text": "CASE #603: 36-year old male from Brgy NAZARETH; LOCAL CASE – APOR; healthcare worker in Lanao del Sur; husband of Case #393"},
    { "added": "2020-09-23", "text": "CASE #604: 67-year old male from gated subdivision in UPPER CARMEN; LOCAL CASE; complained of joint pains and fever; sought consultation at NMMC; 2 household contacts identified"},
    { "added": "2020-09-23", "text": "CASE #605: 26-year old male from Brgy LAPASAN; LOCAL CASE; had fever and body weakness; 11 close contacts identified; expanded contact tracing ongoing"},
    { "added": "2020-09-23", "text": "CASE #606: 71-year old male from Brgy CARMEN; LOCAL CASE; admitted to JR Borja General Hospital due to arm fracture (radius/ulna) from a fall; EXPIRED Sept 21; 3 direct contacts identified"},
    { "added": "2020-09-23", "text": "CASE #607: 57-year old male from Brgy PATAG; LOCAL CASE; admitted at JR Borja General Hospital due to shortness of breath; EXPIRED Sept 21"},
    { "added": "2020-09-23", "text": "CASE #608: 59-year old male from gated subdivision in GUSA; LOCAL CASE; husband of Case #568; had cough; admitted at private hospital"},
    { "added": "2020-09-23", "text": "CASE #609: 34-year old male from Brgy BAYABAS; LOCAL CASE; had fever, shortness of breath; admitted at a private hospital; 2 direct contacts identified"},
    { "added": "2020-09-23", "text": "CASE #610: 72-year old female from Brgy NAZARETH; LOCAL CASE – APOR; wife of Case #457; retired healthcare worker"},
    { "added": "2020-09-23", "text": "CASE #611: 39-year old male from BRGY 17; LOCAL CASE; son of Case #517; asymptomatic"},
    { "added": "2020-09-23", "text": "CASE #612: 70-year old female from BRGY 17; LOCAL CASE; wife of Case #517; 2 close contacts identified"},
    { "added": "2020-09-23", "text": "CASE #613: 41-year old female from BRGY 17; LOCAL CASE; daughter of Case #517"},
    { "added": "2020-09-23", "text": "CASE #614: 19-year old female from Brgy MACABALAN; LOCAL CASE; daughter of Case #432"},
    { "added": "2020-09-24", "text": "CASE #615:  6-year old male from Brgy LAPASAN; LSI from Cavite"},
    { "added": "2020-09-24", "text": "CASE #616: 28-year old male from Brgy CARMEN; LSI from Cavite; 1 direct contact identified; asymptomatic"},
    { "added": "2020-09-24", "text": "CASE #617: 29-year old male; ROF from Middle East; asymptomatic"},
    { "added": "2020-09-24", "text": "CASE #618: 28-year old male from Brgy INDAHAG; LSI from Makati City"},
    { "added": "2020-09-24", "text": "CASE #619: 43-year old male from Brgy CARMEN; LSI from Pampanga; asymptomatic"},
    { "added": "2020-09-24", "text": "CASE #620: 28-year old male; ROF from Middle East; asymptomatic"},
    { "added": "2020-09-24", "text": "CASE #621: 24-year old male from Brgy LUMBIA; LSI from Pasig City; asymptomatic"},
    { "added": "2020-09-24", "text": "CASE #622: 1-year old female from Brgy LAPASAN; LSI from Cavite; asymptomatic"},
    { "added": "2020-09-24", "text": "CASE #623: 34-year old male from Brgy NAZARETH; LOCAL CASE – APOR; worker at NMMC; had chills, headache, itchy throat"},
    { "added": "2020-09-24", "text": "CASE #624: 41-year old male from Brgy MACABALAN; LOCAL CASE; brought to NMMC; complained of shortness of breath, chronic cough, hemoptysis; 3 household contacts identified; EXPIRED"},
    { "added": "2020-09-24", "text": "CASE #625: 60-year old male from gated community in UPPER BALULANG; LOCAL CASE; admitted to private hospital but referred to another private hospital due to unavailability of isolation room; complained of throat discomfort, cough, difficulty in breathing; EXPIRED"},
    { "added": "2020-09-24", "text": "CASE #626: 56-year old male from Brgy BULUA; LOCAL CASE – APOR; govt employee at govt institution at a municipality in MisOr; complained of throat discomfort; 4 household contacts identified; workplace contact tracing ongoing"},
    { "added": "2020-09-24", "text": "CASE #627: 36-year old male from gated community in Brgy LUMBIA; LOCAL CASE – APOR; had fever, cough; admitted at NMMC; 3 household contacts identified"},
    { "added": "2020-09-24", "text": "CASE #628: 64-year old female from BRGY 15; LOCAL CASE; complained of cough, loss of appetite, weakness; 18 household contacts identified"},
    { "added": "2020-09-24", "text": "CASE #629: 28-year old female from Brgy GUSA; LOCAL CASE – APOR; govt employee; admitted at NMMC; had fever, headache; 8 workplace comtacts identified"},
    { "added": "2020-09-24", "text": "CASE #630: 41-year old male from Brgy PATAG; LOCAL CASE; son of Case #497; 1 household contact identified"},
    { "added": "2020-09-24", "text": "CASE #631: 32-year old male; LOCAL CASE – APOR; works in Iligan; currently isolated in Iligan; had fever, anosmia, ageusia; workplace contact tracing still ongoing"},
    { "added": "2020-09-24", "text": "CASE #632: 62-year old male from gated community in Brgy LUMBIA; LOCAL CASE; complained of ageusia, body pain"},
    { "added": "2020-09-24", "text": "CASE #633: 65-year old female from gated community in Brgy LUMBIA; LOCAL CASE; wife of Case #632; had cough"},
    { "added": "2020-09-24", "text": "CASE #634: 23-year old female; LOCAL CASE – APOR; govt scholar; travel history to Malaybalay Sept 16; at DOH isolation facility; 3 household contacts identified"},
    { "added": "2020-09-24", "text": "CASE #635: 57-year old female from Brgy CUGMAN; LOCAL CASE; cousin of Case #528"},
    { "added": "2020-09-24", "text": "CASE #636: 22-year old female from Brgy CUGMAN; LOCAL CASE; daughter of Case #528"},
    { "added": "2020-09-24", "text": "CASE #637: 24-year old female from Brgy CUGMAN; LOCAL CASE; daughter of Case #528; workplace contact tracing ongoing"},
    { "added": "2020-09-24", "text": "CASE #638: 61-year old male from subdivision in Brgy BULUA; LOCAL CASE; went to farm to a city in MisOr; complained of body pain, fever; admitted at private hospital and referred to another private hospital"},
    { "added": "2020-09-24", "text": "CASE #639: 55-year old male from Brgy IPONAN; LOCAL CASE – APOR; govt employee in Iligan; worked in Iligan Sept 14-18; sought consultation at private hospital; 1 close contact identfied"},
    { "added": "2020-09-24", "text": "CASE #640: 25-year old male from Brgy KAUSWAGAN; LOCAL CASE -APOR; consulted at private lab; had fever, 2 household contacts and 1 workplace contact identified"},
    { "added": "2020-09-24", "text": "CASE #641: 106-year old male from Brgy LUMBIA; LOCAL CASE; admitted at private hospital; had fever, cough; 2 watchers identified"},
    { "added": "2020-09-24", "text": "CASE #642: 35-year old male from gated community in Brgy IPONAN; LOCAL CASE; tested positive in Manila while processing papers for abroad; 16 direct contacts identified; RE-TAGGED TO CDO"},
    { "added": "2020-09-25", "text": "CASE #643: 25-year old male from Brgy INDAHAG; ROF from Singapore; tested positive of Covid-19 in Singapore (isolated for 1 month); arrived in CDO Sept 14 via Laguindingan Airport; asymptomatic"},
    { "added": "2020-09-25", "text": "CASE #644: 62-year old male from Brgy CAMAMAN-AN; LSI from Mandaluyong City; arrived in CDO Sept 16 via Laguindingan Airport; asymptomatic"},
    { "added": "2020-09-25", "text": "CASE #645: 12-year old female from Brgy PAGATPAT; LSI from Paranaque City; arrived in CDO Sept 16 (with family); asymptomatic"},
    { "added": "2020-09-25", "text": "CASE #646: 18-year old male from Brgy BALULANG; LSI from Bohol; arrived in CDO Sept 15 via Macabalan Port; asymptomatic"},
    { "added": "2020-09-25", "text": "CASE #647: 34-year old male; LOCAL CASE – APOR; exposed to Case #515; assigned to Butuan City; returned to CDO Sept 1; had fever; for transfer to Camp Evangelista Station Hospital"},
    { "added": "2020-09-25", "text": "CASE #648: 49-year old male from Brgy CARMEN; LOCAL CASE; admitted in a private hospital due to hypoglycemia; worked at a farm in Talakag; 3 household contacts identified; workplace contact tracing ongoing"},
    { "added": "2020-09-25", "text": "CASE #649: 26-year old male from Brgy GUSA; LOCAL CASE; cousin of Case #586; showed symptoms upon transfer to CIU; 2 close contacts identified"},
    { "added": "2020-09-25", "text": "CASE #650: 32-year old male from Brgy GUSA; LOCAL CASE; neighbor of Case #586; asymptomatic"},
    { "added": "2020-09-25", "text": "CASE #651: 34-year old male from Brgy BUGO; LOCAL CASE; worked at an industrial plant in Bugo; had fever; 13 direct household contacts identified; workplace contact tracing ongoing"},
    { "added": "2020-09-25", "text": "CASE #652: 24-year old female from Brgy CAMAMAN-AN; LOCAL CASE; worked as inventory staff of a logistics company; had fever; 4 close contacts identified"},
    { "added": "2020-09-25", "text": "CASE #653: 35-year old male from Brgy CARMEN; LOCAL CASE; worked at a private company in Tablon; admitted in a private hospital due to comnplaints of throat discomfort and fever; 4 household contacts identified; workplace contact tracing ongoing"},
    { "added": "2020-09-25", "text": "CASE #654: 59-year old female from BRGY 25; LOCAL CASE; attended gathering in a government institution in a municipality in MisOr Sept 15; had fever and loss of sense of taste; 3 household and 8 workplace contacts identified; further contact tracing still ongoing"},
    { "added": "2020-09-25", "text": "CASE #655: 52-year old male from Brgy IPONAN; LOCAL CASE – APOR; had fever, cough, headache, body malaise; sought medical consultation at a private hospital; referred to NMMC; 6 direct household contacts identified"},
    { "added": "2020-09-26", "text": "CASE #656: 22-year old female from Brgy BUGO; LSI from Cebu; arrived Sept 18 via Laguindingan Airport"},
    { "added": "2020-09-26", "text": "CASE #657: 27-year old female from BRGY 35; LSI from Pasay City; arrived Sept 18; had occasional sneezing"},
    { "added": "2020-09-26", "text": "CASE #658: 37-year old male from Brgy FS CATANICO; LSI from Mandaue City; arrived Sept 19 via Macabalan Port; asymptomatic"},
    { "added": "2020-09-26", "text": "CASE #659: 32-year old male from Brgy INDAHAG; LSI from Paranaque City; arrived Sept 17 via Macabalan Port; asymptomatic"},
    { "added": "2020-09-26", "text": "CASE #660: 41-year old male from Brgy KAUSWAGAN; LOCAL CASE; swabbed Sept 22 via private testing facility"},
    { "added": "2020-09-26", "text": "CASE #661: 46-year old male from BRGY 35; LOCAL CASE; grandson of 482; asymptomatic"},
    { "added": "2020-09-26", "text": "CASE #662: 67-year old male from BRGY 35; LOCAL CASE; tenant of Case #482; asymptomatic"},
    { "added": "2020-09-26", "text": "CASE #663: 53-year old female from BRGY 35; LOCAL CASE; relative of Case #482; asymptomatic"},
    { "added": "2020-09-26", "text": "CASE #664: 17-year old male from BRGY 35; LOCAL CASE; grandson of Case #482"},
    { "added": "2020-09-26", "text": "CASE #665: 32-year old male; LOCAL CASE – APOR; healthcare worker; exposed to Case #606; 7 household contacts identified"},
    { "added": "2020-09-26", "text": "CASE #666: 28-year old male from Brgy NAZARETH; LOCAL CASE – APOR; govt employee in a province in the region; had fever; swabbed in private testing facility; 18 direct contacts identified"},
    { "added": "2020-09-26", "text": "CASE #667: 27-year old female from Brgy LAPASAN; LOCAL CASE; 1 direct contact identified"},
    { "added": "2020-09-26", "text": "CASE #668: 27-year old female from Brgy CUGMAN; LOCAL CASE; manager at pawnshop; exposed to Case #511; complained of fever, cough, throat pain; 5 workplace contacts identified"},
    { "added": "2020-09-26", "text": "CASE #669: 59-year old female from Brgy NAZARETH; LOCAL CASE; mother of Cases #577 & #578; 4 household contacts identified"},
    { "added": "2020-09-26", "text": "CASE #670: 37-year old male from Brgy GUSA; LOCAL CASE – APOR; worked at a govt institution; complained of body pain, headache, loss sof sense of smell and taste, nasal congestion; 3 household contacts identified"},
    { "added": "2020-09-26", "text": "CASE #671: 67-year old male from Brgy BULUA; LOAL CASE; admitted at private hospital due to body pains, bloody stool"},
    { "added": "2020-09-26", "text": "CASE #672: 43-year old male from Brgy LAPASAN; LOCAL CASE; son-in-law of Case #478"},
    { "added": "2020-09-26", "text": "CASE #673: 11-year old female from Brgy LAPASAN; LOCAL CASE; granddaughter of Case #478"},
    { "added": "2020-09-26", "text": "CASE #674: 15-year old female from Brgy LAPASAN; LOCAL CASE; granddaughter of Case #478"},
    { "added": "2020-09-26", "text": "CASE #675: 47-year old female from Brgy LAPASAN; LOCAL CASE; daughter of Case #478"},
    { "added": "2020-09-26", "text": "CASE #676: 20-year old female from Brgy LAPASAN; LOCAL CASE; granddaughter of Case #478"},
    { "added": "2020-09-26", "text": "CASE #677: 52-year old female from UPPER CARMEN; LOCAL CASE; wife of Case #479; had occasional cough; 2 close contacts identified"},
    { "added": "2020-09-26", "text": "CASE #678: 24-year old female from UPPER CARMEN; LOCAL CASE; daughter of Case #479; had fever"},
    { "added": "2020-09-26", "text": "CASE #679: 25-year old male from UPPER CARMEN; LOCAL CASE; son of Case #479"},
    { "added": "2020-09-26", "text": "CASE #680: 45-year old male from Brgy MACASANDIG; LOCAL CASE; sought check-up at private hospital after experiencing fever, shortness of breath; diabetic; admitted at private hospital; 4 direct contacts identified"},
    { "added": "2020-09-26", "text": "CASE #681: 27-year old female from Brgy CARMEN; LOCAL CASE – APOR; exposed to Case #570; healthcare worker; had fever; admitted at private hospital; 4 household and 7 workplace contacts dentified"},
    { "added": "2020-09-26", "text": "CASE #682: 65-year old male from Brgy BULUA; LOCAL CASE; had cough, loss of sense of taste and smell, fever; sought consultation at Camp Evangelista Station Hospital; further contact tracing ongoing"},
    { "added": "2020-09-26", "text": "CASE #683: 29-year old male from Brgy MACASANDIG; LOCAL CASE – APOR; worker at NMMC; had fever; admitted at NMMC"},
    { "added": "2020-09-28", "text": "CASE #684: 21-year old male from Brgy TABLON; LSI from Surigao; arrived at CDO Port Sept 19; contact tracing ongoing"},
    { "added": "2020-09-28", "text": "CASE #685: 55-year old male from Brgy TABLON; LOCAL CASE; worked at Bugo factory; had shortness of breath, diabetes; swabbed at company dispensary; 3 close contacts identified"},
    { "added": "2020-09-28", "text": "CASE #686: 49-year old male from Brgy TABLON; LOCAL CASE; worked at Bugo factory; had fever, cough, colds; swabbed at company dispensary; 4 close contacts identified"},
    { "added": "2020-09-28", "text": "CASE #687: 29-year old male from Brgy BUGO; LOCAL CASE; worked at Bugo factory; exposed to a confirmed case in the province; had cough; swabbed at company dispensary; 8 close contacts and 19 workplace contacts identified"},
    { "added": "2020-09-28", "text": "CASE #688: 30-year old male from Brgy CAMAMAN-AN; LOCAL CASE; worked at Bugo factory; visited death anniversary in the province Sept 9; had fever, loss of sense of taste & smell; swabbed at company dispensary; 1 direct household and 6 workplace contacts identified"},
    { "added": "2020-09-28", "text": "CASE #689: 22-year old female from Brgy BUGO; LOCAL CASE; worked at Bugo factory; had fever, cough; swabbed at company dispensary; 6 household and 9 workplace contacts identified"},
    { "added": "2020-09-28", "text": "CASE #690: 37-year old female from Brgy LAPASAN; LOCAL CASE; worked at Bugo factory; exposed to a positive case in adjacent municipality; developed loss of sense of taste & smell; swabbed at company dispensary; 5 direct contacts and 5 workplace contacts identified"},
    { "added": "2020-09-28", "text": "CASE #691: 64-year old male from Brgy PATAG; LOCAL CASE; exposed to Case #654; driver of coaster which transports workers"},
    { "added": "2020-09-28", "text": "CASE #692: 31-year old male from Brgy MACABALAN; LOCAL CASE; worked at govt instution in adjacent municipality; exposed to Case #626; 2 direct contacts identified"},
    { "added": "2020-09-28", "text": "CASE #693: 42-year old female from Brgy BUGO; LOCAL CASE; worked at govt institution in the province; exposed to Case #654; 8 workplace contacts identified"},
    { "added": "2020-09-28", "text": "CASE #694: 30-year old male from Brgy BUGO; LOCAL CASE; worked at private institution; contact tracing ongoing"},
    { "added": "2020-09-28", "text": "CASE #695: 24-year old female from Brgy CARMEN; LOCAL CASE – APOR; works at a govt installation at port area; had fever, loss of sense of smell & taste; admitted at private isolation facility; 3 household contacts identified"},
    { "added": "2020-09-28", "text": "CASE #696: 40-year old male from Brgy CUGMAN; LOCAL CASE; works as a messenger; complained of body pains, loss of sense of taste & smell, colds; 2 household contacts identified"},
    { "added": "2020-09-28", "text": "CASE #697: 37-year old female from Brgy KAUSWAGAN; LOCAL CASE; had fever, cough, colds, headache; 5 close contacts identified"},
    { "added": "2020-09-28", "text": "CASE #698: 33-year old male from Brgy CARMEN; LSI from Manila; arrived Sept. 20 via Laguindingan Airport"},
    { "added": "2020-09-28", "text": "CASE #699: 34-year old male from Brgy KAUSWAGAN; LOCAL CASE; had fever, dry cough, diarrhea; had medical check-up at private hospital; 3 direct contacts identified"},
    { "added": "2020-09-28", "text": "CASE #700: 36-year old female from Brgy KAUSWGAAN; LOCAL CASE – APOR; had fever, diarrhea; 3 direct and 2 workplace contacts identified"},
    { "added": "2020-09-28", "text": "CASE #701: 26-year old female; LOCAL CASE; exposed to Case #654; had fever, loss of sense of taste & smell, colds; 8 household contacts identified"},
    { "added": "2020-09-28", "text": "CASE #702: 40-year old male from Brgy AGUSAN; LOCAL CASE; worked as a welder; swabbed as medical reqt before going to Manila; 11 household contacts identified"},
    { "added": "2020-09-28", "text": "CASE #703: 64-year old male from Brgy BULUA; LOCAL CASE; admitted at private hospital due to renal stones scheduled for elective surgery; swabbed as requisite for surgery; 2 household contacts identified"},
    { "added": "2020-09-28", "text": "CASE #704: 35-year old female from Brgy PAGATPAT; LOCAL CASE – APOR; works as medrep; 39 weeks pregnant admitted at NMMC; swabbed as requisite for operation; 1 direct contact identified"},
    { "added": "2020-09-28", "text": "CASE #705: 59-year old female from Brgy BULUA; LOCAL CASE; wife of Case #638; govt employee; admitted at private hospital; had history of illness; 1 household contact identified"},
    { "added": "2020-09-28", "text": "CASE #706: 47-year old female from Brgy GUSA; LOCAL CASE; private employee; developed flu-like symptoms; 4 household contacts identified"},
    { "added": "2020-09-28", "text": "CASE #707: 73-year old male from Brgy BALULANG; LOCAL CASE; has diabetes mellitus, hypertension, history of heart angioplasty; had cough, fever; admitted at NMMC; 7 household contacts identified"},
    { "added": "2020-09-28", "text": "CASE #708: 40-year old female from Brgy CARMEN; LOCAL CASE; had fever, cough; admitted at JR Borja General Hospital; 2 direct contacts identified"},
    { "added": "2020-09-28", "text": "CASE #709: 32-year old male; LOCAL CASE – APOR; exposed to Case #640; govt employee; admitted at NMMC; had fever, cough, shortness of breath; 7 direct contacts identified"},
    { "added": "2020-09-28", "text": "CASE #710: 7-year old male from Brgy CARMEN; LOCAL CASE; son of Case #504; 3 close contacts identified"},
    { "added": "2020-09-28", "text": "CASE #711: 3-year old male from Brgy CARMEN; LOCAL CASE; son of Case #504"},
    { "added": "2020-09-28", "text": "CASE #712: 52-year old female from Brgy BULUA; LOCAL CASE; had fever, cough; contact tracing ongoing"},
    { "added": "2020-09-28", "text": "CASE #713: 33-year old male from Brgy GUSA; LOCAL CASE; cousin of Case #649; 2 close contacts identified"},
    { "added": "2020-09-28", "text": "CASE #714: 28-year old female from Brgy NAZARETH; LOCAL CASE; exposed to Case #434 & #435; 2 close contacts identified"},
    { "added": "2020-09-28", "text": "CASE #715: 25-year old female from Brgy LAPASAN; LOCAL CASE; common-law partner of Case #605"},
    { "added": "2020-09-28", "text": "CASE #716: 30-year old male from BRGY 26; LOCAL CASE – APOR; healthcare worker at NMMC; had body weakness, fever; admitted at NMMC; 2 household contacts identified"},
    { "added": "2020-09-28", "text": "CASE #717: 38-year old male from Brgy MACASANDIG; LOCAL CASE – APOR; healthcare worker at NMMC; had fever, body malaise; admitted at NMMC; 3 household contacts identified"},
    { "added": "2020-09-28", "text": "CASE #718: 63-year old female from Brgy GUSA; LOCAL CASE – APOR; healthcare worker; swabbed as requirement for elective surgery"},
    { "added": "2020-09-28", "text": "CASE #719: 32-year old female from Brgy KAUSWAGAN; LOCAL CASE -APOR; healthcare worker; complained of colds, throat discomfort; 3 hosuehold contacts identified"},
    { "added": "2020-09-29", "text": "CASE #720: 66-year old female from Brgy PAGATPAT; LSI from Laguna; exposed to Case #454; arrived Sept 3 via Laguindingan Airport"},
    { "added": "2020-09-29", "text": "CASE #721: 47-year old male from Brgy KAUSWAGAN; ROF from Europe; arrived Sept 20 via Laguindingan Airport; contact tracing ongoing; asymptomatic; diabetic"},
    { "added": "2020-09-29", "text": "CASE #722: 23-year old female from Brgy CARMEN; LSI from Bohol; arrived Sept 19 via Macabalan Port; asymptomatic"},
    { "added": "2020-09-29", "text": "CASE #723: 38-year old male from Brgy CARMEN; ROF from Middle East; arrived Sept 20 via Laguindingan Airport; asymptomatic"},
    { "added": "2020-09-29", "text": "CASE #724: 40-year old male from Brgy INDAHAG; LOCAL CASE – APOR from Manila; arrived Sept 16 via Laguindingan Airport; had mild chills and colds"},
    { "added": "2020-09-29", "text": "CASE #725: 90-year old male from Brgy CARMEN; LOCAL CASE; exposed to wife; 6 household contacts identified"},
    { "added": "2020-09-29", "text": "CASE #726: 66-year old female from BRGY 14; LOCAL CASE; mother of Case #539; has hypertension, diabetes mellitus; 7 household contacts identified"},
    { "added": "2020-09-29", "text": "CASE #727: 43-year old male from Brgy MACASANDIG; LOCAL CASE; son-in-law of Case #540; asymptomatic; 7 household contacts identified"},
    { "added": "2020-09-29", "text": "CASE #728: 36-year old female from Brgy MACASANDIG; LOCAL CASE; daughter of Case #540; had fever; 7 household contacts identified"},
    { "added": "2020-09-29", "text": "CASE #729: 68-year old female from BRGY 14; LOCAL CASE; exposed to Case #539; had mild symptoms"},
    { "added": "2020-09-29", "text": "CASE #730: 27-year old male from Brgy BULUA; LOCAL CASE; son of Case #638; history of travel to one of municipalities in the province; had fever and cough; 4 household contacts identified; 1 workplace contact to be verified"},
    { "added": "2020-09-29", "text": "CASE #731: 58-year old male from Brgy BONBON; LOCAL CASE; worked at Bugo factory; admitted at company hospital in Bukidnon; had fever; 2 close contacts identified"},
    { "added": "2020-09-29", "text": "CASE #732: 45-year old male from Brgy BUGO; LOCAL CASE; worked at Bugo factory; admitted at company hospital in Bukidnon; had fever, body malaise; 3 household contacts identified; worksite contact tracing ongoing"},
    { "added": "2020-09-29", "text": "CASE #733: 27-year old male from Brgy MACASANDIG; LOCAL CASE; son of Case #540; ; 7 household contacts identified"},
    { "added": "2020-09-29", "text": "CASE #734: 55-year old female from Brgy BALULANG; LOCAL CASE – APOR; exposed to Case #640; experienced loss of sense of taste & smell, cough colds; 1 household contact identified"},
    { "added": "2020-09-29", "text": "CASE #735: 32-year old female from Brgy LUMBIA; LOCAL CASE – APOR; co-worker of Case #640; had fever, throat discomfort; 13 close contacts identified"},
    { "added": "2020-09-29", "text": "CASE #736: 47-year old male from Brgy INDAHAG; LOCAL CASE; developed symptoms; 3 close contacts identified"},
    { "added": "2020-09-29", "text": "CASE #737: 43-year old male from Brgy MACASANDIG; LOCAL CASE – APOR; 5 household contacts identified"},
    { "added": "2020-09-29", "text": "CASE #738: 33-year old female from Brgy CARMEN; LOCAL CASE – APOR; had fever; 5 direct contacts identified"},
    { "added": "2020-09-29", "text": "CASE #739: 37-year old male from Brgy BALULANG; LOCAL CASE – APOR; had fever; 1 direct contact identified"},
    { "added": "2020-09-29", "text": "CASE #740: 44-year old male from Brgy MACASANDIG; LOCAL CASE – APOR; had fever, cough; 14 direct contacts identified"},
    { "added": "2020-09-29", "text": "CASE #741: 31-year old male; LOCAL CASE – APOR; exposed to Case #709; had chills, loss of sense of taste & smell; 6 household contacts identified"},
    { "added": "2020-09-29", "text": "CASE #742: 30-year old male from Brgy LUMBIA; LOCAL CASE – APOR; exposed to Case #709; developed symptoms; 3 direct contacts identified"},
    { "added": "2020-09-29", "text": "CASE #743: 52-year old male from Brgy GUSA; LOCAL CASE – APOR; exposed to Case #709; complained of throat discomfort; 7 household contacts identified"},
    { "added": "2020-09-29", "text": "CASE #744: 40-year old male from Brgy PATAG; LOCAL CASE – APOR; exposed to Case #709; had colds; 5 household contacts identified"},
    { "added": "2020-09-29", "text": "CASE #745: 27-year old male from Brgy BALULANG; LOCAL CASE – APOR; exposed to Case #709; had fever; 4 household contacts identified"},
    { "added": "2020-09-29", "text": "CASE #746: 30-year old male from Brgy CONSOLACION; LOCAL CASE – APOR; exposed to Case #709; asymptomatic"},
    { "added": "2020-09-29", "text": "CASE #747: 51-year old male from Brgy BALULANG; LOCAL CASE – APOR; exposed to Case #709; asymptomatic"},
    { "added": "2020-09-29", "text": "CASE #748: 31-year old male from Brgy CONSOLACION; LOCAL CASE – APOR; exposed to Case #709"},
    { "added": "2020-09-29", "text": "CASE #749: 49-year old male from Brgy MACASANDIG; LOCAL CASE – APOR; husband of Case #566; 2 household contacts identified"},
    { "added": "2020-09-29", "text": "CASE #750: 26-year old male from Brgy LAPASAN; LOCAL CASE – APOR; co-worker of Case #640; had fever, cough; 5 close contacts identified"},
    { "added": "2020-09-29", "text": "CASE #751: 40-year old male from Brgy PUNTOD; LOCAL CASE – APOR; co-worker of Case #640; contact tracing ongoing"},
    { "added": "2020-09-29", "text": "CASE #752: 54-year old male from Brgy CARMEN; LOCAL CASE; 2 direct contacts identified; contact tracing still ongoing"},
    { "added": "2020-09-29", "text": "CASE #753: 30-year old female from Brgy INDAHAG; LOCAL CASE; daughter of Case #540; had fever, cough and colds; 7 household contacts identified"},
    { "added": "2020-09-29", "text": "CASE #754: 27-year old female from Brgy CARMEN; LOCAL CASE; granddaughter of Case #593; asymptomatic"},
    { "added": "2020-09-29", "text": "CASE #755: 46-year old female from Brgy CARMEN; LOCAL CASE; daughter of Case #593"},
    { "added": "2020-09-29", "text": "CASE #756: 43-year old male from Brgy LAPASAN; LOCAL CASE; son of Case #599; travel history to Butuan (Sept 10-13), Malaybalay (Sept 18); 6 household contacts identified"},
    { "added": "2020-09-29", "text": "CASE #757: 29-year old female from Brgy LAPASAN; LOCAL CASE; daughter of Case #599"},
    { "added": "2020-09-29", "text": "CASE #758: 77-year old female from Brgy LAPASAN; LOCAL CASE; wife of Case #599"},
    { "added": "2020-09-29", "text": "CASE #759: 68-year old male from BRGY 30; LOCAL CASE; admitted at private hospital due to fever, loss of appetite; 11 households contacts identified"},
    { "added": "2020-09-29", "text": "CASE #760: 51-year old female from Brgy IPONAN; LOCAL CASE – APOR; healthcare worker in Bukidnon; currently in an isolation unit in Bukidnon; 7 direct contacts identified"},
    { "added": "2020-09-29", "text": "CASE #761: 41-year old female from Brgy BALULANG; LOCAL CASE – APOR; healthcare worker in Lanao del Sur; returned to CDO Sept 13; admitted to NMMC Sept 24 active labor (pregnant); gave birth at NMMC; 3 household contacts identified"},
    { "added": "2020-09-29", "text": "CASE #762: 24-year old male from Brgy IPONAN; LOCAL CASE; had diarrhea, fever, cough; admitted at NMMC; 2 close contacts identified"},
    { "added": "2020-09-30", "text": "CASE #763: 56-year old male from Brgy CUGMAN; LOCAL CASE; had fever, loss of sense of smell; admitted at NMMC; 3 household contacts identified"},
    { "added": "2020-09-30", "text": "CASE #764: 25-year old male from Brgy CARMEN; LOCAL CASE – APOR; worked at DOH-10; had flu, cough, fever, loss of sense of smell & taste; currently at DOH isolation facility"},
    { "added": "2020-09-30", "text": "CASE #765: 62-year old female from Brgy CANITOAN; LOCAL CASE; had fever, cough; admitted at NMMC; 4 direct contacts identified"},
    { "added": "2020-09-30", "text": "CASE #766: 65-year old male from Brgy CAMAMAN-AN; LOCAL CASE; has hypertension, kidney ailment, anorexia; EXPIRED at NMMC Sept 26; contact tracing ongoing"},
    { "added": "2020-09-30", "text": "CASE #767: 50-year old female from Brgy INDAHAG; LOCAL CASE – APOR; had mild colds, loss of sense of smell & taste; 2 direct contacts identified"},
    { "added": "2020-09-30", "text": "CASE #768: 46-year old male from Brgy PAGATPAT; LOCAL CASE – APOR; had dry cough; 8 household contacts identified"},
    { "added": "2020-09-30", "text": "CASE #769: 22-year old female from Brgy MACASANDIG; LOCAL CASE; 38 weeks pregnant; 2 close contacts identified"},
    { "added": "2020-09-30", "text": "CASE #770: 34-year old male from Brgy IPONAN; LOCAL CASE – APOR; had dry cough; 11 close contacts identified"},
    { "added": "2020-09-30", "text": "CASE #771: 43-year old female from Brgy CAMAMAN-AN; LOCAL CASE – APOR; had dry cough; 6 close contacts identified"},
    { "added": "2020-09-30", "text": "CASE #772: 56-year old female from UPPER BALULANG; LOCAL CASE; wife of Case #625; 3 close contacts identified"},
    { "added": "2020-09-30", "text": "CASE #773: 32-year old male from Brgy BALULANG; LOCAL CASE; son of Case #707; 5 direct contacts identified"},
    { "added": "2020-09-30", "text": "CASE #774: 46-year old female from Brgy LAPASAN; LOCAL CASE; exposed to Case #605, #715; 9 close contacts identified"},
    { "added": "2020-09-30", "text": "CASE #775: from Brgy LAPASAN; LOCAL CASE; exposed to Case #715"},
    { "added": "2020-09-30", "text": "CASE #776: 22-year old female from Brgy LAPASAN; LOCAL CASE; sister of Case #715"},
    { "added": "2020-09-30", "text": "CASE #777: 16-year old male from Brgy LAPASAN; LOCAL CASE; brother of Case #715"},
    { "added": "2020-09-30", "text": "CASE #778: 4-months old child from Brgy LAPASAN; LOCAL CASE; child of Case #715 and #605"},
    { "added": "2020-09-30", "text": "CASE #779: 21-year old male from Brgy LAPASAN; LOCAL CASE; exposed to Case #605"},
    { "added": "2020-09-30", "text": "CASE #780: 25-year old female from Brgy KAUSWAGAN; LOCAL CASE; govt employee; had sore throat, loss of sense of smell & taste, sinusitis; attended gathering; 1 close contact identified"},
    { "added": "2020-09-30", "text": "CASE #781: 31-year old male from Brgy BULUA; LOCAL CASE – APOR; asymptomatic; 7 household contacts identified"},
    { "added": "2020-09-30", "text": "CASE #782: 44-year old female from Brgy PUERTO; LOCAL CASE; had fever, shortness of breath, diarrhea, vomiting; 3 direct contacts identified"},
    { "added": "2020-10-01", "text": "CASE #783: 32-year old female from Brgy CARMEN; LSI; arrived Sept 20; 1 direct contact identified"},
    { "added": "2020-10-01", "text": "CASE #784: 26-year old female from Brgy CAMAMAN-AN; LOCAL CASE; exposed to Case #780; 2 close contacts identified"},
    { "added": "2020-10-01", "text": "CASE #785: 24-year old female from BRGY 19; LOCAL CASE – APOR; bank employee with travel history to Bukidnon; had fever, colds, loss of sense of taste & smell; 58 direct contacts identified"},
    { "added": "2020-10-01", "text": "CASE #786: 32-year old female from Brgy BALULANG; LOCAL CASE – APOR; bank employee with travel history to Bukidnon; had dry cough, loss of sense of taste & smell; 66 direct contacts identified"},
    { "added": "2020-10-01", "text": "CASE #787: 25-year old female from Brgy BUGO; LOCAL CASE; bank employee; had loss of sense of smell; 3 close contacts identified"},
    { "added": "2020-10-01", "text": "CASE #788: 35-year old female from Brgy BULUA; LOCAL CASE; healthcare worker; dry cough; admitted at private hospital; 2 direct contacts identified"},
    { "added": "2020-10-01", "text": "CASE #789: 56-year old female from Brgy BUGO; LOCAL CASE; worked at Bugo factory; had fever; 5 close contacts identified"},
    { "added": "2020-10-01", "text": "CASE #790: 24-year old female from Brgy INDAHAG; LOCAL CASE – APOR; exposed to Case #780; govt employee"},
    { "added": "2020-10-01", "text": "CASE #791: 68-year old female from Brgy LAPASAN; LOCAL CASE; exposed to Case #564"},
    { "added": "2020-10-01", "text": "CASE #792: 41-year old female from Brgy BALULANG; LOCAL CASE; close contact; complained of cough"},
    { "added": "2020-10-01", "text": "CASE #793: 18-year old female from Brgy BULUA; LOCAL CASE; exposed to confirmed case who expired in Bukidnon; had dry cough, fever"},
    { "added": "2020-10-01", "text": "CASE #794: 25-year old female from Brgy BULUA; LOCAL CASE; exposed to confirmed case who expired in Bukidnon"},
    { "added": "2020-10-01", "text": "CASE #795: 27-year old male from Brgy LAPASAN; LOCAL CASE; son-in-law of Case #599; 11 close contacts identified"},
    { "added": "2020-10-01", "text": "CASE #796: 1-year old male from Brgy LUMBIA; LOCAL CASE; grandson of Case #632; 5 close contacts identified"},
    { "added": "2020-10-01", "text": "CASE #797: 15-year old female from Brgy LUMBIA; LOCAL CASE; househelp of Case #632"},
    { "added": "2020-10-01", "text": "CASE #798: 45-year old female from Brgy LUMBIA; LOCAL CASE; househelp of Case #632"},
    { "added": "2020-10-01", "text": "CASE #799: 75-year old male from gated community at Brgy GUSA; LOCAL CASE; visited farm at province; had fever, cough; admitted at NMMC; 12 direct contacts identified"},
    { "added": "2020-10-01", "text": "CASE #800: 40-year old male from gated community in Brgy GUSA; LOCAL CASE; maintenance worker at Bugo factory; had cough, colds, sore throat, fever, loss of sense of smell; admitted at private hospital; 2 drect contacts identified"},
    { "added": "2020-10-01", "text": "CASE #801: 58-year old male from Brgy KAUSWAGAN; LOCAL CASE – APOR; govt employee; travel history to Butuan; diagnosed with UTI; admitted at private hospital"},
    { "added": "2020-10-01", "text": "CASE #802: 31-year old female from BRGY 18; LOCAL CASE – APOR; healthcare worker at NMMC; had colds; admitted at NNMC"},
    { "added": "2020-10-01", "text": "CASE #803: 42-year old male from BRGY 13; LOCAL CASE – APOR; healthcare worker at NMMC; had colds; exposed to Case #718; admitted at NMMC"},
    { "added": "2020-10-01", "text": "CASE #804: 79-year old male from Brgy MACABALAN; LOCAL CASE; had dry cough, fever, general body weakness, vomiting; 7 direct contacts identified; admitted at NMMC"},
    { "added": "2020-10-01", "text": "CASE #805: 60-year old female from Brgy KAUSWAGAN; LOCAL CASE – APOR; govt employee; admitted at private hospital; had cough, colds headache, shortness of breath, known asthmatic; 4 direct contacts identified"},
    { "added": "2020-10-01", "text": "CASE #806: 43-year old female from Brgy PATAG; LOCAL CASE – APOR; healthcare worker at NMMC; attended gathering; had loss of sense of taste & smell; 11 direct contacts identified"},
    { "added": "2020-10-01", "text": "CASE #807: mentally-incapacitated individual; currently at CIU"},
    { "added": "2020-10-01", "text": "CASE #808: 27-year old male from Brgy BULUA; LOCAL CASE – APOR; govt employee; swabbed by Red Cross; 10 direct contacts identified"},
    { "added": "2020-10-02", "text": "CASE #809: 53-year old male from Brgy PATAG; LSI from Tagum City; musician; 1 direct contact identified"},
    { "added": "2020-10-02", "text": "CASE #810: 53-year old male from Brgy PATAG; LSI from Tagum City; musician; had fever"},
    { "added": "2020-10-02", "text": "CASE #811: 28-year old male from Brgy SAN SIMON; LSI from Cavite; arrived Sept 23 via Laguindigan Airport; asymptomatic"},
    { "added": "2020-10-02", "text": "CASE #812: 25-year old male from Brgy CAMAMAN-AN; LSI from Negros Occidental; arrived Sept 24 at CDO Port; had fever, body weakness, cough"},
    { "added": "2020-10-02", "text": "CASE #813: 24-year old female from Brgy CAMAMAN-AN; LSI from Negros Oriental; common-law partner of Case #812; had colds"},
    { "added": "2020-10-02", "text": "CASE #814: 28-year old female from Brgy INDAHAG; LOCAL CASE – APOR; BFP personnel assigned in one municipality in the province; attended birthday; had fever, cough; 1 direct and 14 workplace contacts identified"},
    { "added": "2020-10-02", "text": "CASE #815: from Brgy INDAHAG; LOCAL CASE – APOR; BFP personnel assigned at region; travel histoy to one municipality in the province; had loss of sense of smell; 3 direct contacts identified"},
    { "added": "2020-10-02", "text": "CASE #816: from Brgy GUSA; LOCAL CASE; spouse of Case #629; contact tracing still ongoing"},
    { "added": "2020-10-02", "text": "CASE #817: 51-year old female from Brgy BUGO; LOCAL CASE; worked at Bugo factory; had fever, chest tightness; 3 direct contacts identified"},
    { "added": "2020-10-02", "text": "CASE #818: 32-year old female from Brgy BAYABAS; LOCAL CASE; wife of Case #609; had fever, dry cough; 4 direct contacts identified"},
    { "added": "2020-10-02", "text": "CASE #819: 27-year old male from Brgy IPONAN; LOCAL CASE – APOR; exposed to Case #670; 3 direct contacts identified"},
    { "added": "2020-10-02", "text": "CASE #820: 30-year old female from BRGY 29; LOCAL CASE; exposed to Case #683; worked at construction; isolated at private accommodation facility"},
    { "added": "2020-10-02", "text": "CASE #821: 45-year old female from Brgy GUSA; LOCAL CASE; sought consultation at private hospital due to dizziness; referred to JR Borja General Hospital; referred and admitted at NMMC; 4 direct contacts identified"},
    { "added": "2020-10-02", "text": "CASE #822: 31-year old male from Brgy PATAG; LOCAL CASE – APOR; went to JR Borja General Hospital due to kidney disease, edema (lower extremities), increase in creatinine and body weakness; referred to NMMC"},
    { "added": "2020-10-02", "text": "CASE #823: 81-year old male from Brgy CAMAMAN-AN; LOCAL CASE; had fever; sought consultation at private clinic; referred and admitted to JR Borja General Hospital; EXPIRED Sept 29 due to acute renal failure; 13 family contacts identified"},
    { "added": "2020-10-02", "text": "CASE #824: 21-year old male from Brgy CARMEN; LOCAL CASE; had fever, loss of taste & smell; admitted at JR Borja General Hospital"},
    { "added": "2020-10-02", "text": "CASE #825: 81-year old male from Brgy PUNTOD; LOCAL CASE; admitted at JR Borja General Hospital; EXPIRED at Sept 29 due to cerebral hypoxia acute respiratory failure; 12 direct contacts identified"},
    { "added": "2020-10-02", "text": "CASE #826: 70-year old female from Brgy BALULANG; LOCAL CASE; admitted at private hospital due to pneumonia Aug 30; discharged Sept 12; admitted at JR Borja General Hospital due to body malaise Sept 27; 3 close contacts identified; diabetes mellitus"},
    { "added": "2020-10-02", "text": "CASE #827: 36-year old female; LOCAL CASE; exposed to Case #786 & #785; worked at bank; 15 close contacts identified"},
    { "added": "2020-10-02", "text": "CASE #828: 38-year old male; LOCAL CASE; exposed to Case #786 & #785, bank ATM loader; 3 household and 56 workplace contacts identified"},
    { "added": "2020-10-02", "text": "CASE #829: 25-year old male from Brgy CARMEN; LOCAL CASE; exposed to Case #785; bank ATM loader; 23 close contacts identified"},
    { "added": "2020-10-02", "text": "CASE #830: 39-year old male; LOCAL CASE; exposed to Case #786 & #785; bank security guard; 17 workplace contacts identified"},
    { "added": "2020-10-02", "text": "CASE #831: 40-year old male; LOCAL CASE; exposed to Case #786 & #785; bank security guard"},
    { "added": "2020-10-03", "text": "CASE #832: 42-year old female; LOCAL CASE – APOR; healthcare worker; exposed to confirmed case in Lanao del Sur; swabbed in Lanao del Sur"},
    { "added": "2020-10-03", "text": "CASE #833: 10-year old child of Case #832; LOCAL CASE"},
    { "added": "2020-10-03", "text": "CASE #834: 47-year old female; LOCAL CASE – APOR; exposed to Case #640"},
    { "added": "2020-10-03", "text": "CASE #835: 54-year old male from Brgy CUGMAN; self-employed; admitted at private hospital due to dizziness, nausea; 2 close contacts identified"},
    { "added": "2020-10-03", "text": "CASE #836: 53-year old female from Brgy LAPASAN; LOCAL CASE; wife of Case #502"},
    { "added": "2020-10-03", "text": "CASE #837: 16-year old male from Brgy CARMEN; LOCAL CASE; son of Case #584"},
    { "added": "2020-10-03", "text": "CASE #838: 32-year old female from Brgy LAPASAN; LOCAL CASE – APOR; healthcare worker in Bukidnon; re-tagged from Bukidnon"},
    { "added": "2020-10-03", "text": "CASE #839: 63-year old male from Brgy NAZARETH; LOCAL CASE; father of Cases #577, #578, husband of #669"},
    { "added": "2020-10-03", "text": "CASE #840: 38-year old male from MACABALAN; LOCAL CASE – APOR; NMMC; had history of travel in province"},
    { "added": "2020-10-03", "text": "CASE #841: 66-year old male from Brgy CAMAMAN-AN; LOCAL CASE; had fever, cough, body weakness, hyperglycemia; contact tracing ongoing"},
    { "added": "2020-10-03", "text": "CASE #842: 39-year old male from Brgy IPONAN; LOCAL CASE – APOR; history travel to Butuan City; had fever, body malaise, cough, shortness of breath; admitted at NMMC"},
    { "added": "2020-10-03", "text": "CASE #843: 83-year old female from gated community in Brgy KAUSWAGAN; LOCAL CASE; history of myocardial infraction, pneumonia; developed shortness of breath, cough; admitted at NMMC"},
    { "added": "2020-10-03", "text": "CASE #844: 37-year old female from Brgy BUGO; LOCAL CASE; exposed to Case #798; travel history in Bukidnon; admitted at private hospital; 5 close family contacts identified"},
    { "added": "2020-10-03", "text": "CASE #845: 31-year old male from Brgy BAYABAS; LOCAL CASE; had flu-like symptoms; lost sense of smell & taste; admitted at private hospital; 10 household contacts identified"},
    { "added": "2020-10-03", "text": "CASE #846: 34-year old male from Brgy BUGO; LOCAL CASE; worked at Bugo factory; had colds, cough; 2 direct contacts"},
    { "added": "2020-10-03", "text": "CASE #847: 40-year old male from Brgy CANITOAN; LOCAL CASE; car accessories sales associate; 3 close contacts identified"},
    { "added": "2020-10-03", "text": "CASE #848: 77-year old female from Brgy PUNTOD; LOCAL CASE; admitted at private hospital due to hypertension, bell’s palsy; 14 close contacts identified"},
    { "added": "2020-10-03", "text": "CASE #849: 40-year old female from Brgy CARMEN; LOCAL CASE; bank employee; had sore throat, body pain, nasal congestion, loss of smell, taste; 10 close contacts identified"},
    { "added": "2020-10-03", "text": "CASE #850: 54-year old female from Brgy BUGO; LOCAL CASE; attended family gathering; had fever, loss of sense of taste; admitted at private hospital"},
    { "added": "2020-10-03", "text": "CASE #851: 31-year old female from Brgy CONSOLACION; LOCAL CASE – APOR; post-partum; gave birth at private hospital; 4 close contacts identified"},
    { "added": "2020-10-03", "text": "CASE #852: 43-year old male; LOCAL CASE – APOR; retagged from Davao City"},
    { "added": "2020-10-05", "text": "CASE #853: 31-year old female from Brgy LUMBIA; LOCAL CASE – APOR; healthcare workers assigned at one municipality in province; pregnant – hypogastric pains, vaginal bleeding, forced abortion"},
    { "added": "2020-10-05", "text": "CASE #854: 34-year old male from Brgy IPONAN; LSI from Pasay City; arrived Sept 25 via Laguindingan Airport; asymptomatic"},
    { "added": "2020-10-05", "text": "CASE #855: 37-year old female from Brgy MACABALAN; LOCAL CASE; live-in partner of Case #692"},
    { "added": "2020-10-05", "text": "CASE #856: 26-year old female from Brgy CAMAMAN-AN; LOCAL CASE; sister-in-law of Case #701; 3 close contacts identified"},
    { "added": "2020-10-05", "text": "CASE #857: 10-year old female from Brgy CUGMAN; LOCAL CASE; granddaughter of Case #557; niece of Case #554"},
    { "added": "2020-10-05", "text": "CASE #858: 37-year old male from BRGY 15; LOCAL CASE; son-in-law of Case #628"},
    { "added": "2020-10-05", "text": "CASE #859: 18-year old male from BRGY 15; LOCAL CASE; grandson of Case #628"},
    { "added": "2020-10-05", "text": "CASE #860: 66-year old male from BRGY 15; LOCAL CASE; husband of Case #628; has hypertension, cough"},
    { "added": "2020-10-05", "text": "CASE #861: 4-year old female from BRGY 15; LOCAL CASE; granddaughter of Case #628"},
    { "added": "2020-10-05", "text": "CASE #862: 22-year old female from BRGY 15; LOCAL CASE; daughter-in-law of CASE #628"},
    { "added": "2020-10-05", "text": "CASE #863: 12-year old male from BRGY 15; LOCAL CASE; grandson of Case #628"},
    { "added": "2020-10-05", "text": "CASE #864: 35-year old male from Brgy MACASANDIG; LOCAL CASE; worked at Bugo factory; had cough colds; 1 close contact identified"},
    { "added": "2020-10-05", "text": "CASE #865: 55-year old male from Brgy TABLON; LOCAL CASE; worked at Bugo factory; colds, throat discomfort, loss of smell & taste; 2 close contacts identified"},
    { "added": "2020-10-05", "text": "CASE #866: 38-year old female from Brgy PUERTO; LOCAL CASE; pregnant; had check-up at private hospital; swabbed as requirement for labor procedure"},
    { "added": "2020-10-05", "text": "CASE #867: 66-year old female from Brgy CAMAMAN-AN; LOCAL CASE; mother of Case #624; 3 close contacts identified"},
    { "added": "2020-10-05", "text": "CASE #868: 30-year old male from Brgy CAMAMAN-AN; LOCAL CASE; brother of Case #624"},
    { "added": "2020-10-05", "text": "CASE #869: 72-year old male from Brgy CAMAMAN-AN; LOCAL CASE; father of Case #624"},
    { "added": "2020-10-05", "text": "CASE #870: 76-year old male from Brgy BUGO; LOCAL CASE; sought consultation at private hospital due to vertigo, body weakness; transferred to NMMC; 5 close contacts identified"},
    { "added": "2020-10-05", "text": "CASE #871: 67-year old female from Brgy CUGMAN; LOCAL CASE; admitted at JR Borja General Hospital due to asthma; transferred to NMMC"},
    { "added": "2020-10-05", "text": "CASE #872: 32-year old female from Brgy KAUSWAGAN; LOCAL CASE; sought consultation at NMMC due to bleeding; scheduled for surgery; had flu-like symptoms"},
    { "added": "2020-10-05", "text": "CASE #873: 55-year old male from Brgy BALULANG; LOCAL CASE; bank employee; 6 close contacts identified"},
    { "added": "2020-10-05", "text": "CASE #874: 57-year old male from Brgy KAUSWAGAN; LOCAL CASE; bank employee; 3 close contacts identified"},
    { "added": "2020-10-05", "text": "CASE #875: 21-year old male from Brgy CARMEN; LOCAL CASE; exposed to confirmed case in Bukidnon; worked at wine factory"},
    { "added": "2020-10-05", "text": "CASE #876: from Brgy CARMEN; LOCAL CASE; exposed to confirmed case in Bukidnon; worked at wine factory"},
    { "added": "2020-10-05", "text": "CASE #877: 46-year old male from Brgy CAMAMAN-AN; LOCAL CASE; complained of body malaise; went to private diagnostic center for FBS; 7 close contacts identified"},
    { "added": "2020-10-05", "text": "CASE #878: 53-year old male from Brgy BUGO; LOCAL CASE; businessman; had fever, cough, body malaise; admitted at NMMC; EXPIRED Oct 02; 6 close contacts identified"},
    { "added": "2020-10-05", "text": "CASE #879: 54-year old male from Brgy BUGO; LOCAL CASE; worked at Bugo factory; admitted at private hospital; lost of sense of taste, smell; 5 close contacts identified"},
    { "added": "2020-10-05", "text": "CASE #880: 55-year old female from brgy BUGO; LOCAL CASE; worked at Bugo factory; had headache, fever, cough; 6 household and 4 workpalce contacts identified"},
    { "added": "2020-10-05", "text": "CASE #881: 41-year old male from Brgy BUGO; LOCAL CASE; worked at Bugo factory; had flu-like symptoms; admitted at private hospital; 6 household contacts identified"},
    { "added": "2020-10-05", "text": "CASE #882: 40-year old male from Brgy BUGO; LOCAL CASE; exposed to Case #689; worked at Bugo factory; 9 close contacts identified"},
    { "added": "2020-10-05", "text": "CASE #883: 41-year old male from Brgy BUGO; LOCAL CASE; exposed to Case #651; admitted at private hospital; had fever; 3 close contacts"},
    { "added": "2020-10-05", "text": "CASE #884: 27-year old male from BRGY 22; LOCAL CASE; swabbed for travel requirement; 7 close contacts identified"},
    { "added": "2020-10-05", "text": "CASE #885: 38-yer old female from Brgy BUGO; LOCAL CASE; worked at Bugo factory; had cough, colds; admitted at private hospital; 2 close contacts identified"},
    { "added": "2020-10-05", "text": "CASE #886: 41-year old male from Brgy BULUA; LOCAL CASE – APOR; govt employee; complained of body malaise, anorexia, fever, diarrhea; 2 close contacts identified"},
    { "added": "2020-10-05", "text": "CASE #887: 30-year old female from Brgy TABLON; LOCAL CASE; worked at Bugo factory; attended gathering Sept 15; lost sense of smell & taste; 3 household and 5 general contacts identified"},
    { "added": "2020-10-05", "text": "CASE #888: 58-year old female from Brgy BRGY 30; LOCAL CASE; wife of Case #759; 1 close contacts identified"},
    { "added": "2020-10-05", "text": "CASE #889: 46-year old male; LOCAL CASE – APOR; exposed to Case #751; travel history to Bukidnon Sept 9"},
    { "added": "2020-10-05", "text": "CASE #890: 13-year old female from Brgy GUSA; LOCAL CASE; daughter of Case #706"},
    { "added": "2020-10-06", "text": "CASE #891: 36-year old female from Brgy CARMEN; LOCAL CASE; wife of Case #504; mother of Case #710, #711"},
    { "added": "2020-10-06", "text": "CASE #892: 60-year old female; LOCAL CASE; close contact (laundrywoman) of Case #770; 1 direct contact identified"},
    { "added": "2020-10-06", "text": "CASE #893: 45-year old male from Brgy CAMAMAN-AN; LOCAL CASE; close contact of Case #806; attended gathering; 5 direct contacts identified"},
    { "added": "2020-10-06", "text": "CASE #894: 19-year old female from Brgy CAMAMAN-AN; LOCAL CASE; close contact of Case #806; attended gathering; had fever; 5 direct contacts identified"},
    { "added": "2020-10-06", "text": "CASE #895: 16-year old female from Brgy CAMAMAN-AN; LOCAL CASE; close contact of Case #806; attended gathering"},
    { "added": "2020-10-06", "text": "CASE #896: 47-year old female from Brgy CAMAMAN-AN; LOCAL CASE; close contact of Case #806; attended gathering; had loss of sense of smell & taste"},
    { "added": "2020-10-06", "text": "CASE #897: 41-year old female from Brgy CAMAMAN-AN; LOCAL CASE; close contact of Case #806; attended gathering"},
    { "added": "2020-10-06", "text": "CASE #898: 24-year old male from BRGY 19; LOCAL CASE; exposed to Case #785"},
    { "added": "2020-10-06", "text": "CASE #899: 35-year old male from Brgy LAPASAN; LOCAL CASE; exposed to Case #690; contact tracing ongoing"},
    { "added": "2020-10-06", "text": "CASE #900: 56-year old male from Brgy BUGO; LOCAL CASE; manager at an establishment in Bugo; claims exposed to Case #850"},
    { "added": "2020-10-06", "text": "CASE #901: 49-year old female from Brgy GUSA; LOCAL CASE; close contact of Case #806; attended gathering"},
    { "added": "2020-10-06", "text": "CASE #902: 47-year old male from Brgy GUSA; LOCAL CASE; close contact of Case #806; attended gathering"},
    { "added": "2020-10-06", "text": "CASE #903: 23-year old male from Brgy GUSA; LOCAL CASE; close contact of Case #806; attended gathering"},
    { "added": "2020-10-06", "text": "CASE #904: 12-year old male from Brgy GUSA; LOCAL CASE; close contact of Case #806; attended gathering"},
    { "added": "2020-10-06", "text": "CASE #905: 70-year old male from Brgy PUERTO; LOCAL CASE; had fever, cough, diarrhea, loss of sense of taste; referred to NMMC; EXPIRED Oct 03; 7 close contacts identified"},
    { "added": "2020-10-06", "text": "CASE #906: 63-year old female from BRGY 1; LOCAL CASE; had flu-like symptoms, diarrhea; diagnosed with pneumonia; has neorologic deficit (post-stroke); 2 close contacts identified"},
    { "added": "2020-10-06", "text": "CASE #907: 30-year old male from Brgy KAUSWAGAN; LOCAL CASE – APOR; healthcare worker/physician at NMMC; had cough, colds, body malaise; admitted at NMMC"},
    { "added": "2020-10-06", "text": "CASE #908: 23-year old male from Brgy BUGO; LOCAL CASE; had colds, loss of sense of smell; 14 direct contacts identified"},
    { "added": "2020-10-06", "text": "CASE #909: 43-year old male from Brgy CAMAMAN-AN; LOCAL CASE; 2 close contacts identified"},
    { "added": "2020-10-07", "text": "CASE #910: 35-year old male from Brgy CAMAMAN-AN; LOCAL CASE; 5 close contacts identified"},
    { "added": "2020-10-07", "text": "CASE #911: 27-year old female from Brgy CUGMAN; LOCAL CASE – APOR; healthcare worker (pharmacist) at NMMC; had flu-like symptoms"},
    { "added": "2020-10-07", "text": "CASE #912: 31-year old female from Brgy IPONAN; LOCAL CASE – APOR; govt employee; travel history to Bukidnon, MisOr; had fever, loss of sense of taste & smell; 6 household and 11 workplace contacts"},
    { "added": "2020-10-07", "text": "CASE #913: 59-year old female from Brgy LAPASAN; LOCAL CASE; had fever, cough, flank pain; admitted at NMMC; 6 close contacts identified"},
    { "added": "2020-10-07", "text": "CASE #914: 88-year old male from Brgy TABLON; LOCAL CASE; had cough, shortness of breath; EXPIRED Oct 3; 6 close contacts identified"},
    { "added": "2020-10-07", "text": "CASE #915: 33-year old male from Brgy AGUSAN; LOCAL CASE; worked at Bugo factory; had loss of sense of taste; 1 direct contact identified"},
    { "added": "2020-10-07", "text": "CASE #916: 27-year old female from Brgy BUGO; LOCAL CASE; exposed to non-CDO confirmed case; travel history to Davao, MisOr; had cough, sore throat; 6 close contacts identified"},
    { "added": "2020-10-07", "text": "CASE #917: 28-year old male from Brgy PAGATPAT; LOCAL CASE; worked at private hospital; 6 direct contacts identified"},
    { "added": "2020-10-07", "text": "CASE #918: 29-year old male from Brgy LAPASAN; LOCAL CASE; exposed to Case #917"},
    { "added": "2020-10-07", "text": "CASE #919: 53-year old male from Brgy BALULANG; LOCAL CASE; exposed to Cases #917, #918; 7 direct contacts identified"},
    { "added": "2020-10-07", "text": "CASE #920: 22-year old male from Brgy BULUA; LOCAL CASE; private employee; 6 direct contacts identified"},
    { "added": "2020-10-07", "text": "CASE #921: 34-year old female from Brgy BALULANG; LOCAL CASE – APOR; bank employee; had fever, cold sweats; admitted at private hospital; 1 direct contact identified"},
    { "added": "2020-10-07", "text": "CASE #922: 70-year old male from Brgy LAPASAN; LOCAL CASE; travel history to Bukidnon; had fever, sore throat, cough; admitted at JR Borja General Hospital; 1 direct contact identified"},
    { "added": "2020-10-07", "text": "CASE #923: 17-year old male from Brgy MACASANDIG; LOCAL CASE; son of Case #680; 3 close contacts identified"},
    { "added": "2020-10-07", "text": "CASE #924: 39-year old female from Brgy BALULANG; LOCAL CASE; had fever, cough, loss of sense of smell, diarrhea; 8 direct contacts identified"},
    { "added": "2020-10-07", "text": "CASE #925: 28-year old male from BRGY 36; LOCAL CASE; healthcare worker at NMMC; complained of difficulty in breathing; admitted at NMMC; 4 direct contacts identified"},
    { "added": "2020-10-07", "text": "CASE #926: 37-year old male from Brgy MACABALAN; LOCAL CASE – APOR; nurse at private hospital; had fever, cough, loss of sense of taste & smell; admitted at private hospital; 4 direct contacts identified"},
    { "added": "2020-10-07", "text": "CASE #927: 42-year old male from Brgy CAMAMAN-AN; LOCAL CASE; PDL at PS3 Agora; transferred to BJMP Lumbia Sept 17; currently at TTMF Lumbia Jail"},
    { "added": "2020-10-07", "text": "CASE #928: 40-year old male from Brgy CUGMAN; LOCAL CASE; PDL at PS10 Cugman Sept 10; transferred to BJMP Lumbia Sept 22; currently at TTMF Lumbia Jail"},
    { "added": "2020-10-07", "text": "CASE #929: 40-year old male from Brgy CUGMAN; LOCAL CASE; PDL at PS10 Cugman (Sept 5); transferred to BJMP Lumbia Sept 10; currently at TTMF Lumbia Jail"},
    { "added": "2020-10-07", "text": "CASE #930: 21-year old male from Brgy MACABALAN; LOCAL CASE; PDL at PS7 Bulua (Sept 9); transferred to BJMP Lumbia Sept 16; currently at TTMF Lumbia Jail"},
    { "added": "2020-10-07", "text": "CASE #931: 33-year old male from Brgy LAPASAN; LOCAL CASE; PDL at PS3 Agora (Sep 2); transferred to BJMP Lumbia Sept 16; currently at TTMF Lumbia Jail"},
    { "added": "2020-10-07", "text": "CASE #932: 40-year old male from Brgy IPONAN; LOCAL CASE; PDL at CIDG (Sept 9); transferred to BJMP Lumbia Sept 16; currently at TTMF Lumbia Jail"},
    { "added": "2020-10-07", "text": "CASE #933: 23-year old male from Brgy LAPASAN; LOCAL CASE; PDL at PS7 Bulua (Sep 10); transferred to BJMP Lumbia Sept 16; currently at TTMF Lumbia Jail"},
    { "added": "2020-10-07", "text": "CASE #934: 29-year old male from Brgy TABLON; LOCAL CASE; PDL at PS10 Cugman (Sept 13); transferred to BJMP Lumbia Sept 22; currently at TTMF Lumbia Jail"},
    { "added": "2020-10-07", "text": "CASE #935: 47-year old male from Brgy TABLON; LOCAL CASE; PDL at PS6 Puerto (Sept 10); transferred to BJMP Lumbia Sept 15; currently at TTMF Lumbia Jail"},
    { "added": "2020-10-07", "text": "CASE #936: 21-year old male from Brgy TIGNAPOLOAN; LOCAL CASE; PDL at PS8 Lumbia (Sept 9); transferred to BJMP Lumbia Sept 16; currently at TTMF Lumbia Jail"},
    { "added": "2020-10-07", "text": "CASE #937: 37-year old male from Brgy CANITOAN; LOCAL CASE; PDL at PS9 Macasandig (Sept 10); transferred to BJMP Lumbia Sept 16; currently at TTMF Lumbia Jail"},
    { "added": "2020-10-07", "text": "CASE #938: 23-year old male from Brgy CAMAMAN-AN; LOCAL CASE; PDL at CDEU (Sept 10); transferred to BJMP Lumbia Sept 22; currently at TTMF Lumbia Jail"},
    { "added": "2020-10-07", "text": "CASE #939: 23-year old male from Brgy CAMAMAN-AN; LOCAL CASE; PDL at CDEU (Sept 6); transferred to BJMP Lumbia Sept 22; currently at TTMF Lumbia Jail"},
    { "added": "2020-10-07", "text": "CASE #940: 29-year old male from Brgy CARMEN; LOCAL CASE; PDL at PS1 Divisoria (Sept 10); transferred to BJMP Lumbia Sept 21; currently at TTMF Lumbia Jail"},
    { "added": "2020-10-07", "text": "CASE #941: 18-year old male from Brgy BALULANG; LOCAL CASE; PDL at PS1 Divisoria (Sept 10); transferred to BJMP Lumbia Sept 21; currently at TTMF Lumbia Jail"},
    { "added": "2020-10-07", "text": "CASE #942: 43-year old male from Brgy NAZARETH; LOCAL CASE; PDL at PS1 Divisoria (March 2020); transferred to BJMP Lumbia Sept 11; currently at TTMF Lumbia Jail"},
    { "added": "2020-10-07", "text": "CASE #943: 20-year old male from Brgy CARMEN; LOCAL CASE; PDL at PS1 Divisoria (Sept 10); transferred to BJMP Lumbia Sept 21; currently at TTMF Lumbia Jail"},
    { "added": "2020-10-07", "text": "CASE #944: 28-year old male from Brgy MACASANDIG; LOCAL CASE; PDL at PS9 Macasandig (Sept 10); transferred to BJMP Lumbia Sept 16; currently at TTMF Lumbia Jail"},
    { "added": "2020-10-07", "text": "CASE #945: 24-year old male from Brgy MACABALAN; LOCAL CASE; PDL at PS4 Carmen (Aug 23); detainee transferred to BJMP Lumbia Sept 15; currently at TTMF Lumbia Jail"},
    { "added": "2020-10-07", "text": "CASE #946: 25-year old male from Brgy BUGO; LOCAL CASE; PDL at PS3 Agora (Sep 8); transferred to BJMP Lumbia Sept 22; currently at TTMF Lumbia Jail"},
    { "added": "2020-10-07", "text": "CASE #947: 27-year old male from Brgy CAMAMAN-AN; LOCAL CASE; PDL at PS2 Cogon (Sept 14); transferred to BJMP Lumbia Sept 17; currently at TTMF Lumbia Jail"},
    { "added": "2020-10-07", "text": "CASE #948: 43-year old male from Brgy CAMAMAN-AN; LOCAL CASE; PDL at PS2 Cogon (Sept 10); transferred to BJMP Lumbia Sept 15; currently at TTMF Lumbia Jail"},
    { "added": "2020-10-07", "text": "CASE #949: 20-year old male from Brgy CANITOAN; LOCAL CASE; PDL at PS1 Divisoria (Sept 10); transferred to BJMP Lumbia Sept 21; currently at TTMF Lumbia Jail"},
    { "added": "2020-10-07", "text": "CASE #950: 29-year old male from Brgy CUGMAN; LOCAL CASE; PDL at PS1 Divisoria (July 29); transferred to BJMP Lumbia Sept 27; currently at TTMF Lumbia Jail"},
    { "added": "2020-10-07", "text": "CASE #951: 32-year old male from Brgy MACABALAN; LOCAL CASE; PDL at PS2 Cogon (Sept 9); transferred to BJMP Lumbia Sept 15; currently at TTMF Lumbia Jail"},
    { "added": "2020-10-08", "text": "CASE #952: 62-year old male from Brgy PUERTO; LOCAL CASE; had fever, cough, admitted at private hospital; diagnosed with pneumonia; transferred to NMMC; 1 direct contact identified"},
    { "added": "2020-10-08", "text": "CASE #953: 37-year old male from Brgy SAN SIMON; LOCAL CASE; member of maritime police in province; had fever, cough; 3 direct contacts identified"},
    { "added": "2020-10-08", "text": "CASE #954: 42-year old male from Brgy LUMBIA; LOCAL CASE – APOR; worker at NMMC; complained of back pain, loss of sense of taste; 3 direct contacts identified"},
    { "added": "2020-10-08", "text": "CASE #955: 62-year old male from Brgy AGUSAN; LOCAL CASE; had fever, cough; 4 direct contacts identified"},
    { "added": "2020-10-08", "text": "CASE #956: 37-year old male from Brgy GUSA; LOCAL CASE; son of Case #799; travel history to Bukidnon; 3 close contacts identified"},
    { "added": "2020-10-08", "text": "CASE #957: 40-year old male from Brgy GUSA; LOCAL CASE; son of Case #799"},
    { "added": "2020-10-08", "text": "CASE #958: 10-year old female from Brgy GUSA; LOCAL CASE; granddaughter of Case #799"},
    { "added": "2020-10-08", "text": "CASE #959: 18-year old female from Brgy GUSA; LOCAL CASE; granddaughter of Case #799; has bipolar disorder"},
    { "added": "2020-10-08", "text": "CASE #960: 39-year old female from Brgy PATAG; LOCAL CASE; private employee; consulted at private hospital due to allergy; 5 close contacts identified"},
    { "added": "2020-10-08", "text": "CASE #961: 58-year old female from Brgy BALULANG; LOCAL CASE – APOR; bank employee; had loss of sense of smell & taste; 1 direct contact identified"},
    { "added": "2020-10-08", "text": "CASE #962: 37-year old male from Brgy NAZARETH; LOCAL CASE – APOR; bank employee; travel history to Iligan; complained of sore throat; contact tracing ongoing"},
    { "added": "2020-10-08", "text": "CASE #963: 26-year old male; LOCAL CASE – APOR; bank employee; travel history to Iligan; had flu-like symptoms, loss of sense of smell; 2 direct contacts identified"},
    { "added": "2020-10-08", "text": "CASE #964: 58-year old male from Brgy BALULANG; LOCAL CASE – APOR; bank employee; travel history (work-related) to Bukidnon, MisOr; has cough; 4 close contacts"},
    { "added": "2020-10-08", "text": "CASE #965: 50-year old male from Brgy KAUSWAGAN; LOCAL CASE; experienced dizziness, has diabetes, gall stones, shortness of breath, cough; diagnosed with pneumonia; admitted at private hospital; 3 close contacts identified"},
    { "added": "2020-10-08", "text": "CASE #966: 61-year old female from Brgy IPONAN; LOCAL CASE – APOR; worked at NMMC; travel history to province; had cough, back pain; 4 close contacts identified"},
    { "added": "2020-10-08", "text": "CASE #967: 28-year old male from BRGY 22; LOCAL CASE; had fever, loss of sense of smell; 2 household contacts identified"},
    { "added": "2020-10-08", "text": "CASE #968: 34-year old female from BRGY 18; LOCAL CASE – APOR; caregiver; had cough; 3 direct household contacts identified"},
    { "added": "2020-10-08", "text": "CASE #969: 23-year old male from Brgy LAPASAN; LOCAL CASE; worked at private company; attended gathering; had cough, loss of sense of taste; 6 close contacts identified"},
    { "added": "2020-10-08", "text": "CASE #970: 34-year old female from Brgy MACABALAN; LOCAL CASE; daughter of Case #804; had fever, loss of sense of smell; 6 close contacts identified"},
    { "added": "2020-10-08", "text": "CASE #971: 56-year old male from Brgy GUSA; LOCAL CASE; father of Case #629; 4 close contacts identified"},
    { "added": "2020-10-08", "text": "CASE #972: 33-year old male from Brgy MACABALAN; LOCAL CASE; exposed to Case #804; 1 close contact identified"},
    { "added": "2020-10-08", "text": "CASE #973: 24-year old female from Brgy NAZARETH; LOCAL CASE; traveled to beach resort in province; had colds, loss of sense of taste & smell; 3 close contacts identified"},
    { "added": "2020-10-08", "text": "CASE #974: 63-year old male from Brgy LAPASAN; LOCAL CASE; admitted at private hospital due to CBA (Stroke); has hypertension"},
    { "added": "2020-10-08", "text": "CASE #975: 38-year old male from Brgy LUMBIA; LOCAL CASE; worked at private company; had fever, sneezing; admitted at private hospital; 3 close contacts identified"},
    { "added": "2020-10-08", "text": "CASE #976: 25-year old male from Brgy GUSA; LOCAL CASE; quality assurance analyst of a company; had fever; 3 close contacts identified"},
    { "added": "2020-10-08", "text": "CASE #977: 80-year old female from BRGY 18; LOCAL CASE; has onset of anorexia; 8 close contacts identified"},
    { "added": "2020-10-08", "text": "CASE #978: 48-year old male from Brgy BONBON; LOCAL CASE – APOR; worked at govt facility; travel history to Camiguin; attended neighborhood gathering; 6 close contacts identified"},
    { "added": "2020-10-08", "text": "CASE #979: 27-year old female from Brgy CARMEN; LOCAL CASE – APOR; govt employee; had fever; 3 direct contacts identified"},
    { "added": "2020-10-08", "text": "CASE #980: 58-year old male from Brgy CARMEN; LOCAL CASE; maintenance personnel; complained of shoulder and head pain, bloatedness, jaundice, cough; admitted at private hospital"},
    { "added": "2020-10-08", "text": "CASE #981: 36-year old male from Brgy AGUSAN; LOCAL CASE – APOR; nurse at JR Borja General Hospital; had sore throat, fever, body malaise"},
    { "added": "2020-10-08", "text": "CASE #982: 50-year old female from Brgy CUGMAN; LOCAL CASE; wife of Case #528"},
    { "added": "2020-10-08", "text": "CASE #983: 37-year old female from Brgy IPONAN; LOCAL CASE – APOR; govt worker; travel history to Camiguin, MisOr; attended party; complained of throat discomfort, had fever; 4 household, 9 workplace and 3 general close contacts identified"},
    { "added": "2020-10-08", "text": "CASE #984: 38-year old male from Brgy BONBON; LOCAL CASE; had cough; 4 close contacts identified"},
    { "added": "2020-10-09", "text": "CASE #985: 26-year old male from Brgy BULUA; ROF; arrived Sept 29 via Laguindingan Airport; asymptomatic"},
    { "added": "2020-10-09", "text": "CASE #986: 50-year old male from BRGY 18; LSI; arrived Sept 30 via Laguindingan Airport; asymptomatic"},
    { "added": "2020-10-09", "text": "CASE #987: 1-year old male from Brgy BONBON; LSI; arrived Sept 30 via Laguindingan Airport; asymptomatic"},
    { "added": "2020-10-09", "text": "CASE #988: 28-year old female; LOCAL CASE; RE-TAGGED from Camiguin; travel history to Camiguin last Oct 1; currently in isolation at Ardent Hot Spring"},
    { "added": "2020-10-09", "text": "CASE #989: 40-year old male from Brgy PATAG; LOCAL CASE; security officer; had dry cough, fever; 5 direct contacts identified"},
    { "added": "2020-10-09", "text": "CASE #990: 21-year old female from Brgy MACASANDIG; LOCAL CASE – APOR; DOH employee; attended gathering; had fever, loss of sense of taste; 6 direct family contacts identified"},
    { "added": "2020-10-09", "text": "CASE #991: 53-year old male from Brgy PUNTOD; LOCAL CASE; son of Case #825"},
    { "added": "2020-10-09", "text": "CASE #992: 23-year old female from Brgy KAUSWAGAN; LOCAL CASE; daughter of Case #965; bank employee; had colds; 5 close contacts identified"},
    { "added": "2020-10-09", "text": "CASE #993: 53-year old female from Brgy KAUSWAGAN; LOCAL CASE; wife of Case #965; had cough; 4 direct contacts identified"},
    { "added": "2020-10-09", "text": "CASE #994: 42-year old male; LOCAL CASE; co-worker of Case #917; admitted at private hospital; 3 direct contacts identified"},
    { "added": "2020-10-09", "text": "CASE #995: 26-year old male from LAPASAN; LOCAL CASE; exposed to Case #917; 1 household contact identified"},
    { "added": "2020-10-09", "text": "CASE #996: 72-year old male from Brgy PUNTOD; LOCAL CASE; had cough, fever; diagnosed with mild pneumonia; admitted at private hospital; 3 household contacts identified"},
    { "added": "2020-10-09", "text": "CASE #997: 33-year old male from Brgy PAGATPAT; LOCAL CASE; private company worker; 1 direct contact identified"},
    { "added": "2020-10-09", "text": "CASE #998: 56-year old female from Brgy BUGO; LOCAL CASE; supervisor at Bugo factory; admitted at Bukidnon hospital; 8 direct contacts identified"},
    { "added": "2020-10-09", "text": "CASE #999: 41-year old male from gated community at Brgy CARMEN; LOCAL CASE; had cough"},
    { "added": "2020-10-09", "text": "CASE #1000: 37-year old female from gated community at Brgy CARMEN; LOCAL CASE; wife of Case #999; had cough"},
    { "added": "2020-10-09", "text": "CASE #1001: 35-year old female from BRGY 2; LOCAL CASE; had flu-like symptoms, difficulty in breathing; admitted at private hospital; 4 close contacts identified"},
    { "added": "2020-10-09", "text": "CASE #1002: 26-year old male; LOCAL CASE; customer service representative; had fever; 9 close contacts identified"},
    { "added": "2020-10-09", "text": "CASE #1003: 26-year old female from Brgy GUSA; LOCAL CASE; had fever, loss of sense of taste & smell; 1 direct contact identified"},
    { "added": "2020-10-09", "text": "CASE #1004: 72-year old female from Brgy LAPASAN; LOCAL CASE; complained of chest pain and body malaise; admitted at NMMC; EXPIRED Oct 8; 8 household contacts identified"},
    { "added": "2020-10-09", "text": "CASE #1005: 37-year old male from Brgy GUSA; LOCAL CASE; complained of difficulty in breathing, epigastric pain; admitted at NMMC; 7 close contacts identified"},
    { "added": "2020-10-09", "text": "CASE #1006: 31-year old female from Brgy CARMEN; LOCAL CASE; travel history to Bukidnon (attended burial); complained of shortness of breath, loss of sense of taste & smell; 4 household contacts identified"},
    { "added": "2020-10-09", "text": "CASE #1007: 15-year old female from Brgy CAMAMAN-AN; LOCAL CASE; postpartum (normal delivery) at JR Borja General Hospital; had vaginal bleeding Sept 30; admitted at JR Borja General Hospital; 6 direct contacts identified"},
    { "added": "2020-10-09", "text": "CASE #1008: 45-year old female; LOCAL CASE – APOR; healthcare worker at DOH-10; had cough, colds, fever; isolated at DOH facility; 7 close contacts identified"},
    { "added": "2020-10-09", "text": "CASE #1009: 30-year old male from Brgy BULUA; LOCAL CASE – APOR; travel history to Gingoog City; 6 household contacts identified"},
    { "added": "2020-10-09", "text": "CASE #1010: 33-year old female from Brgy BULUA; LOCAL CASE – APOR; wife of Case #1009; 6 household contacts identified"},
    { "added": "2020-10-09", "text": "CASE #1011: 28-year old female from gated community at Brgy BALULANG; LOCAL CASE – APOR; govt worker; travel history to province; had colds, loss of sense of smell; 8 direct contacts identified"},
    { "added": "2020-10-09", "text": "CASE #1012: 29-year old male from gated community at Brgy BALULANG; LOCAL CASE – APOR; husband of Case #1011; govt worker; travel history to Bukidnon; 12 direct contacts identified"},
    { "added": "2020-10-09", "text": "CASE #1013: 59-year old male from Brgy CAMAMAN-AN; LOCAL CASE; PDL at PS2 Cogon (Sept 13); transferred to BJMP Lumbia Sept 23; currently at TTMF Lumbia Jail"},
    { "added": "2020-10-09", "text": "CASE #1014: 34-year old male from Brgy CARMEN; LOCAL CASE; PDL at PS2 Cogon (Sept 11); transferred to BJMP Lumbia Sept 23; currently at TTMF Lumbia Jail"},
    { "added": "2020-10-09", "text": "CASE #1015: 32-year old male from Brgy KAUSWAGAN; LOCAL CASE; PDL at PS2 Cogon (Sept 11); transferred to BJMP Lumbia Sept 23; currently at TTMF Lumbia Jail"},
    { "added": "2020-10-09", "text": "CASE #1016: 52-year old male from Brgy CARMEN; LOCAL CASE; PDL at PS8 Lumbia (Aug 20); transferred to BJMP Lumbia Sept 27; currently at TTMF Lumbia Jail"},
    { "added": "2020-10-09", "text": "CASE #1017: 27-year old male from Brgy NAZARETH; LOCAL CASE; PDL at PS7 Bulua (Sept 9); transferred to BJMP Lumbia Sept 23; currently at TTMF Lumbia Jail"},
    { "added": "2020-10-10", "text": "CASE #1018: 79-year old male from Brgy LAPASAN; LOCAL CASE; had cough, fever, shortness of breath; admitted at NMMC; 1 direct contact identified"},
    { "added": "2020-10-10", "text": "CASE #1019: 36-year old female from Brgy CAMAMAN-AN; LOCAL CASE; exposed to Case #818; worked at Bugo factory; had back pain, headache, cough; 10 close contacts identified"},
    { "added": "2020-10-10", "text": "CASE #1020: 24-year old from Brgy BUGO; LOCAL CASE; exposed to Case #882; had fever, dizziness, loss of sense of smell; 3 close contacts identified"},
    { "added": "2020-10-10", "text": "CASE #1021: 54-year old male from Brgy MACASANDIG; LOCAL CASE; had fever, nasal congestion; 8 direct contacts identified"},
    { "added": "2020-10-10", "text": "CASE #1022: 49-year old female from gated community in Brgy CARMEN; LOCAL CASE – APOR; hosted gathering at their house; had fever, loss of sense of smell & taste; 4 household and 5 general contacts identified"},
    { "added": "2020-10-10", "text": "CASE #1023: 42-year old female from Brgy BUGO; LOCAL CASE; worked at Bugo factory; had colds, loss of sense of taste & smell; admitted at Bukidnon hospital; 9 close contacts identified"},
    { "added": "2020-10-10", "text": "CASE #1024: 32-year old female from Brgy BUGO; LOCAL CASE; worked at Bugo factory; had cough, colds, loss of sense of smell; 1 direct contact identified"},
    { "added": "2020-10-10", "text": "CASE #1025: 40-year old female from Brgy BUGO; LOCAL CASE; worked at Bugo factory; had colds, loss of sense of smell; 4 direct contacts identified"},
    { "added": "2020-10-10", "text": "CASE #1026: 37-year old male from Brgy TABLON; LOCAL CASE; worked at Bugo factory; had fever, cough, colds, loss of sense of taste & smell; 1 direct contact identified"},
    { "added": "2020-10-10", "text": "CASE #1027: 46-year old female from Brgy BUGO; LOCAL CASE; worked at Bugo factory; had loss of sense of smell; contact tracing ongoing"},
    { "added": "2020-10-10", "text": "CASE #1028: 43-year old male from Brgy KAUSWAGAN; LOCAL CASE; had cough, fever; 5 close contacts identified"},
    { "added": "2020-10-10", "text": "CASE #1029: 29-year old female from Brgy TABLON; LOCAL CASE; had loss of sense of smell; 2 close contacts identified"},
    { "added": "2020-10-10", "text": "CASE #1030: 57-year old male from Brgy MACASANDIG; LOCAL CASE; experienced body malaise; travel history to Bukidnon; admitted at private hospital due to diarrhea; 2 close contacts identified"},
    { "added": "2020-10-10", "text": "CASE #1031: 54-year old male from Brgy AGUSAN; LOCAL CASE; had fever, anorexia, headache, body malaise; 3 direct contacts identified"},
    { "added": "2020-10-10", "text": "CASE #1032: 50-year old female from gated community in Brgy BALULANG; LOCAL CASE – APOR; healthcare worker; had fever, cough; admitted at private hospital; 6 direct and 5 workplace contacts identified"},
    { "added": "2020-10-10", "text": "CASE #1033: 51-year old male from gated community in Brgy BALULANG; LOCAL CASE – APOR; healthcare worker; husband of Case #1032; had flu-like symptoms; admitted at private hospital; 6 direct and 3 workplace contacts identified"},
    { "added": "2020-10-10", "text": "CASE #1034: 51-year old male from Brgy CUGMAN; LOCAL CASE; admitted at private hospital for thyroid surgery; 5 close contacts identified"},
    { "added": "2020-10-12", "text": "CASE #1035: 42-year old male; LOCAL CASE; exposed to Case #999; had fever; 5 direct contacts identified"},
    { "added": "2020-10-12", "text": "CASE #1036: 51-year old female from Brgy CARMEN; LOCAL CASE; wife of Case #876; had fever, loss of sense of taste & smell; 3 household and 10 workplace contacts identified"},
    { "added": "2020-10-12", "text": "CASE #1037: 18-year old female from Brgy CARMEN; LOCAL CASE; daughter of Case #876; had fever; 3 household contacts identified"},
    { "added": "2020-10-12", "text": "CASE #1038: 16-year old female from Brgy CARMEN; LOCAL CASE; daughter of Case #876"},
    { "added": "2020-10-12", "text": "CASE #1039: 33-year old female from Brgy KAUSWAGAN; LOCAL CASE; had fever, cough, body malaise; contact tracing ongoing"},
    { "added": "2020-10-12", "text": "CASE #1040: 34-year old female from gated community in Brgy LUMBIA; LOCAL CASE; bank employee; exposed to non-CDO Covid patient; 4 direct contacts identified"},
    { "added": "2020-10-12", "text": "CASE #1041: 35-year old male from BRGY 26; LOCAL CASE – APOR; travel history to Villanueva, MisOr; 1 close contact identified"},
    { "added": "2020-10-12", "text": "CASE #1042: 23-year old male from BRGY 23; LOCAL CASE; travel history to MisOr; had sore throat, loss of sense of taste & smell; admitted at private hospital; 3 direct contacts identified"},
    { "added": "2020-10-12", "text": "CASE #1043: 27-year old female from Brgy PATAG; LOCAL CASE – APOR; worked at private hospital; exposed to Case #926; had flu-like symptoms, fever, body malaise; admitted at private hospital 5 direct contacts identified"},
    { "added": "2020-10-12", "text": "CASE #1044: 34-year old male from Brgy MACASANDIG; LOCAL CASE – APOR; nurse at private hospital; attended party at Brgy Camaman-an; had fever, joint and muscle pain; admitted at private hospital; 4 direct contacts identified"},
    { "added": "2020-10-12", "text": "CASE #1045: 52-year old male from Brgy MACABALAN; LOCAL CASE; complained of flank pain, unable to walk, diagnosed with kidney problem; admitted at JR Borja General Hospital"},
    { "added": "2020-10-12", "text": "CASE #1046: 63-year old female from Brgy MACASANDIG; LOCAL CASE; sister-in-law of Case #801; attended gathering; admitted at private hospital due to diarrhea, cough, diagnosed with pneumonia; referred to NMMC; 12 close contacts identified"},
    { "added": "2020-10-12", "text": "CASE #1047: 36-year old female; LOCAL CASE; co-worker of Case #999; had flu-like symptoms; 4 household and 10 workplace contacts identified"},
    { "added": "2020-10-12", "text": "CASE #1048: 22-year old female from Brgy MACABALAN; LOCAL CASE; exposed to Case #678; 2 close contacts identified"},
    { "added": "2020-10-12", "text": "CASE #1049: 39-year old female; LOCAL CASE; exposed to non-CDO Covid patient; had colds, loss of sense of smell; admitted at private hospital; 3 close contacts idenified"},
    { "added": "2020-10-12", "text": "CASE #1050: 72-year old female from Brgy CAMAMAN-AN; LOCAL CASE; mother of Case #909; had cough, sore throat, had kidney and heart problem"},
    { "added": "2020-10-12", "text": "CASE #1051: 47-year old male from gated community in Brgy BALULANG; LOCAL CASE; buisnessman; visited farm in Bukidnon; had fever, sore throat; 3 household contacts identified"},
    { "added": "2020-10-12", "text": "CASE #1052: 43-year old male from Brgy GUSA; LOCAL CASE; swabbed as work requirement; 5 close contacts identifed"},
    { "added": "2020-10-12", "text": "CASE #1053: 44-year old male from Brgy CARMEN; LOCAL CASE; maintenance man at private company; had dizziness; 5 close contacts identifed"},
    { "added": "2020-10-12", "text": "CASE #1054: 52-year old male from Brgy PUNTOD; LOCAL CASE; worked at CDO Port; had dizziness; admitted at NMMC; 3 household and 1 workplace contacts identified"},
    { "added": "2020-10-12", "text": "CASE #1055: 36-year old male from Brgy GUSA; LOCAL CASE; construction worker (former barber); had cough, difficulty in breathing; attended birthday party; admitted at NMMC; 9 close contacts identified"},
    { "added": "2020-10-12", "text": "CASE #1056: 46-year old male from BRGY 29; LOCAL CASE; had fever, cough; 3 close contacts identified"},
    { "added": "2020-10-12", "text": "CASE #1057: 29-year old male from Brgy MACABALAN; LOCAL CASE; swabbed as work requirement; 7 household and 16 workplace contacts identified"},
    { "added": "2020-10-12", "text": "CASE #1058: 2-year old male from BRGY 15; LOCAL CASE; son of Case #862; 18 household contacts identified"},
    { "added": "2020-10-12", "text": "CASE #1059: 59-year old female from Brgy CAMAMAN-AN; LOCAL CASE; wife of Case #766; 2 direct contacts identified"},
    { "added": "2020-10-12", "text": "CASE #1060: 13-year old female from Brgy CUGMAN; LOCAL CASE; granddaughter of Case #871; 2 close contacts identified"},
    { "added": "2020-10-12", "text": "CASE #1061: 34-year old female from Brgy AGUSAN; LOCAL CASE; wife of Case #915; 1 direct contact identified"},
    { "added": "2020-10-12", "text": "CASE #1062: 45-year old female from Brgy BUGO; LOCAL CASE; wife of Case #878; contact tracing ongoing"},
    { "added": "2020-10-12", "text": "CASE #1063: 42-year old male from Brgy CAMAMAN-AN; LOCAL CASE – APOR; deployment nurse at DOH-10"},
    { "added": "2020-10-12", "text": "CASE #1064: 38-year old female from Brgy CARMEN; LOCAL CASE – APOR; had cough, loss of sense of taste & smell; 3 close contacts identified"},
    { "added": "2020-10-12", "text": "CASE #1065: 26-year old male from Brgy CUGMAN; LOCAL CASE; PDL at PDEA (Sept 18); transferred to BJMP Lumbia Sept 28; currently at TTMF Lumbia Jail"},
    { "added": "2020-10-12", "text": "CASE #1066: 24-year old male from Brgy BUGO; LOCAL CASE; PDL at PS6 Puerto (Sept 23); transferred to BJMP Lumbia Sept 28; currently at TTMF Lumbia Jail"},
    { "added": "2020-10-12", "text": "CASE #1067: 37-year old male from Brgy LUMBIA; LOCAL CASE; PDL at PS6 Puerto (Sept 22); transferred to BJMP Lumbia Sept 29; currently at TTMF Lumbia Jail"},
    { "added": "2020-10-12", "text": "CASE #1068: 16-year old male from Brgy BUGO; LOCAL CASE; PDL at PS6 Puerto (Feb 2020); transferred to BJMP Lumbia February 27; for transfer to youth reformatory facility in Gingoog; currently at TTMF Lumbia Jail"},
    { "added": "2020-10-13", "text": "CASE #1069: 16-year old male from Brgy PUNTOD; LOCAL CASE; PDL at BJMP Lumbia; for transfer to youth reformatory facility in Gingoog; currently at TTMF Lumbia Jail"},
    { "added": "2020-10-13", "text": "CASE #1070: 19-year old male from Brgy BUGO; LOCAL CASE; PDL at BJMP Lumbia; for transfer to youth reformatory facility in Gingoog; currently at TTMF Lumbia Jail"},
    { "added": "2020-10-13", "text": "CASE #1071: 47-year old male from Brgy LAPASAN; LOCAL CASE; PDL at BJMP Lumbia; currently at TTMF Lumbia Jail"},
    { "added": "2020-10-13", "text": "CASE #1072: 28-year old male from Brgy CUGMAN; LOCAL CASE – APOR; pharmacist at NMMC; husband of Case #911; developed stuffy nose, loss of sense of smell"},
    { "added": "2020-10-13", "text": "CASE #1073: 45-year old female from Brgy KAUSWAGAN; LOCAL CASE – APOR; nurse at NMMC; 2 close contacts identified"},
    { "added": "2020-10-13", "text": "CASE #1074: 35-year old male from Brgy GUSA; LOCAL CASE – APOR; admin Asst at NMMC"},
    { "added": "2020-10-13", "text": "CASE #1075: 24-year old male from Brgy KAUSWAGAN; LOCAL CASE – APOR; admin Staff at NMMC; 3 direct contacts identified"},
    { "added": "2020-10-13", "text": "CASE #1076: 39-year old male from Brgy PAGATPAT; LOCAL CASE – APOR; dental aide at NMMC"},
    { "added": "2020-10-13", "text": "CASE #1077: 23-year old male from Brgy LUMBIA; LOCAL CASE; had fever, dizziness, loss of sense of smell; 4 direct contacts identified"},
    { "added": "2020-10-13", "text": "CASE #1078: 8-year old female from Brgy CAMAMAN-AN; LOCAL CASE; granddaughter of Case #766"},
    { "added": "2020-10-13", "text": "CASE #1079: 58-year old female from Brgy CUGMAN; LOCAL CASE; wife of Case #835"},
    { "added": "2020-10-13", "text": "CASE #1080: 24-year old male from Brgy BALULANG; LOCAL CASE; son of Case #873"},
    { "added": "2020-10-13", "text": "CASE #1081: 15-year old male from Brgy CUGMAN; LOCAL CASE; son of Case #763"},
    { "added": "2020-10-13", "text": "CASE #1082: 39-year old female from Brgy PUERTO; LOCAL CASE; exposed to Case #905"},
    { "added": "2020-10-13", "text": "CASE #1083: 58-year old female from Brgy TABLON; LOCAL CASE; wife of Case #914"},
    { "added": "2020-10-13", "text": "CASE #1084: 29-year old female from Brgy SAN SIMON; LOCAL CASE; wife of Case #953"},
    { "added": "2020-10-13", "text": "CASE #1085: 59-year old female from Brgy CAMAMAN-AN; LOCAL CASE; wife of Case #841"},
    { "added": "2020-10-13", "text": "CASE #1086: 37-year old female from Brgy AGUSAN; LOCAL CASE; wife of Case #955"},
    { "added": "2020-10-13", "text": "CASE #1087: 26-year old male from Brgy BUGO; LOCAL CASE; had flu-like symptoms, loss of sense of smell"},
    { "added": "2020-10-13", "text": "CASE #1088: 82-year old female from Brgy PATAG; LOCAL CASE; had fever, occasional cough; admitted at private hospital; 13 direct contacts identified"},
    { "added": "2020-10-13", "text": "CASE #1089: 62-year old female from Brgy PUNTOD; LOCAL CASE; attended wake of sister-in-law; had fever, flank pain; admitted at private hospital; 11 direct contacts identified"},
    { "added": "2020-10-13", "text": "CASE #1090: 35-year old male from Brgy PAGATPAT; LOCAL CASE; salesman; travel history to Gingoog City; had cough; 10 direct contacts identified"},
    { "added": "2020-10-13", "text": "CASE #1091: 39-year old male from Brgy CAMAMAN-AN; LOCAL CASE; swabbed as work requirement; 3 direct contacts identified"},
    { "added": "2020-10-13", "text": "CASE #1092: 39-year old male from Brgy CARMEN; LOCAL CASE; swabbed as work requirement; 6 direct contacts identified"},
    { "added": "2020-10-13", "text": "CASE #1093: 37-year old male from Brgy INDAHAG; LOCAL CASE; sales personnel; travel history to CARAGA Region; had fever, colds; 4 direct contacts identified"},
    { "added": "2020-10-13", "text": "CASE #1094: 23-year old female from Brgy TABLON; LOCAL CASE; had fever, loss of consciousness while on duty; 7 direct contacts identified"},
    { "added": "2020-10-13", "text": "CASE #1095: 45-year old male from Brgy LAPASAN; LOCAL CASE – APOR; had fever, cough, dizziness, loss of sense of smell; 9 direct contacts identified"},
    { "added": "2020-10-13", "text": "CASE #1096: 24-year old male from Brgy MACASANDIG; LOCAL CASE – APOR; swabbed as work requirement; travel history to Ozamiz; attended birthday in Manolo Fortich; 15 direct contacts identified"},
]

var hide_lsi = false;
var only_for_selected_date = false;
var hide_rof = false;
var hide_no_child = false;
var selected_date = '';

var with_contacts = [];
var no_connections = [];
var no_contacts = [];

var nodes = [];
var node_count = 0;
var edges = [];
var nodes_with_edges = [];

for (var i = 0; i < covidData.length ; i++) {
    var original_text = covidData[i].text;
    covidData[i].child = [];

    // Getting Case #
    var case_num_string = original_text.match(/CASE #\d*:/g);
    var case_num = case_num_string[0].replace('CASE #', '').replace(':', '');
    covidData[i].case_num = parseInt(case_num);

    // Getting Age
    // NOTE: Infants aged < 1 year have been rounded up to 1
    /* var age_string = original_text.match(/\d*-year old/g);
    var age = age_string[0].replace('-year old', '');
    covidData[i].age = parseInt(age); */
    
    // Getting Gender
    var sex_string = original_text.match(/(^|\s)male|female(\s|$)/g);
    var sex = "unspecified";

    if (sex_string != null) {
        var sex = sex_string[0].trim();
        covidData[i].sex = sex;
    }

    // Getting Case Type
    var type_string = original_text.match(/LSI|ROF|LOCAL CASE/g);
    var type = 'unspecified';

    var color = 'blue';
    if (type_string !== null)  {
        type = type_string[0].trim();
        
        switch (type) {
            case 'LSI': color = "orange"; break;
            case 'ROF': color = "green"; break;
            case 'LOCAL CASE': color = "red"; break;
        }
    }
    covidData[i].type = type;

    // Getting people in contact with
    var contacts = [];
    var string_without_case_prefix = covidData[i].text.replace(/CASE #\d*:/g, '');
    var in_contact_with_string = string_without_case_prefix.match(/CASE #\d*/gi, '');
    if (in_contact_with_string !== null) {
        for (var j = 0 ; j < in_contact_with_string.length ; j++) {
            var contact_case_num = parseInt(in_contact_with_string[j].replace('CASE #', '').replace('case #', '').replace('Case #', '').trim());

            // check first if already in array
            if (!contacts.includes(contact_case_num)) {
                contacts.push(contact_case_num);
            }
        }
    }

    covidData[i].contacts = contacts;
    if (contacts.length > 0) {
        with_contacts.push(covidData[i]);
    } else {
        no_contacts.push(covidData[i]);
    }

    nodes.push({ 
        id: parseInt(case_num), 
        label: "Case #" + case_num,
        title: covidData[i].original_text,
        color: {
            background: color,
            border: '#000000',
            highlight: {
                background: color
            },
        },
        caseType: type.replace(" ", '-'),
        font: {
            color: 'white',
            face: 'Lato',
        },
    });
    /* location:  "from xxxxxx" */
}

for (var i = 0; i < with_contacts.length ; i++) {
    var current_case = with_contacts[i];

    for (var j = 0; j < current_case.contacts.length ; j++) {
        var parent_case_num = current_case.contacts[j];

        var parent_case = covidData.filter( case1 => {
            return case1.case_num == parent_case_num;
        })[0]

        if (parent_case != undefined) {
            var match_replationship = '(\\w* of CASE #'+parent_case_num+ ')|(exposed to CASE #'+parent_case_num+')';
            var re = new RegExp(match_replationship, 'gi');
            var relationship_string = current_case.text.match(re);
            
            var label = '';

            if (relationship_string !== null) {
                label = relationship_string[0].replace(/CASE/gi, '');
                if (relationship_string.length > 1) {
                    label = relationship_string[1].replace(/CASE/gi, '');
                }
            }
            // push to parent case
            /* covidData.filter( case1 => {
                return case1.case_num == parent_case_num;
            })[0].child.push(current_case); */

            if (!nodes_with_edges.includes(parent_case_num)) {
                nodes_with_edges.push(parent_case_num)
            }

            if (!nodes_with_edges.includes(current_case.case_num)) {
                nodes_with_edges.push(current_case.case_num)
            }

            edges.push({
                from: parent_case_num, 
                to: current_case.case_num,
                label: label,
                arrows: {
                    to: {
                        enabled: true
                    }
                }
            })
        }
    }
}

// create a network
var container = document.getElementById('network-chart');

// provide the data in the vis format
var data = {
    nodes: nodes,
    edges: edges
};
node_count = nodes.length;
$('#node-count').html("Showing " + node_count + " patients (262 not included)<br/> <strong>" + (262 + node_count) + ' TOTAL CUMULATIVE CASES</strong>');

var options = {
    height: '100%',
    width: '100%',
    layout: {
        randomSeed: 1,
        improvedLayout: false,
    },
};

var resetSelectedCase = () => {    
    document.getElementById('case-id').innerHTML = '';
    document.getElementById('case-details').innerHTML = '';
    document.getElementById('added-date').innerHTML = '';
}

// initialize your network!
var network = new vis.Network(container, data, options);
network.on( 'click', properties => {    
    // clear info
    resetSelectedCase();

    if (properties.nodes.length > 0) {
        var id = properties.nodes[0];
        var selected_case = covidData.filter( selected_case => {
            return selected_case.case_num == id;
        })[0];
        
        document.getElementById('case-id').innerHTML = "CASE #" + selected_case.case_num

        var details = selected_case.text.replace(/CASE #\d*:/g, '').split(';')
        var detailsHTML;
        document.getElementById('added-date').innerHTML = selected_case.added;

        for(var i = 0 ; i < details.length ; i++) {
            detailsHTML = document.createElement('li');
            detailsHTML.textContent = details[i];
            document.getElementById('case-details').append(detailsHTML)
        }
    }
});

var filterNodesAndRedraw = () => {
    var dataCopy = covidData;
    var filteredNodes = [];
    var selectedDate = new Date($("#datepicker").val());

    dataCopy = dataCopy.filter(datarow => {        
        if (only_for_selected_date) {
            var rowDateFormatted = new Date(datarow.added);
            return rowDateFormatted.toDateString() == selectedDate.toDateString();
        } else {
            return new Date(datarow.added) <= new Date($("#datepicker").val());
        }        
    })

    if (hide_lsi) {
        dataCopy = dataCopy.filter(datarow => {
            return datarow.type != 'LSI'
        })
    }

    if (hide_rof) {
        dataCopy = dataCopy.filter(datarow => {
            return datarow.type != 'ROF'
        })
    }

    if (hide_no_child) {
        // console.log(dataCopy);
        dataCopy = dataCopy.filter(datarow => {
            return nodes_with_edges.includes(datarow.case_num)
        })
    }

    for (var i = 0; i < dataCopy.length ; i++) {
        var color = 'blue';
        switch (dataCopy[i].type) {
            case 'LSI': color = "orange"; break;
            case 'ROF': color = "green"; break;
            case 'LOCAL CASE': color = "red"; break;
        }

        filteredNodes.push({ 
            id: parseInt(dataCopy[i].case_num), 
            label: "Case #" + dataCopy[i].case_num,
            title: dataCopy[i].original_text,
            color: color,
            caseType: dataCopy[i].type.replace(" ", '-'),
            font: {
                color: 'white',
                face: 'Lato',
            }
        });
    }    

    network.setOptions(options);
    network.setData({ nodes: filteredNodes, edges });
    // network.redraw();
    node_count = filteredNodes.length;
    $('#node-count').html("Showing " + node_count + " patients (262 not included)<br/> <strong>" + (262 + node_count) + ' TOTAL CUMULATIVE CASES</strong>');
}

$( document ).ready(function() {
    var last_updated_date = new Date(covidData[covidData.length - 1].added);
    $('#last_updated_date').text(last_updated_date.toDateString());
    $( "#datepicker" ).datepicker({
        dateFormat: "yy-mm-dd",
        minDate: "2020-08-27",
        maxDate: '0',
        beforeShowDay: function(date){
            var string = jQuery.datepicker.formatDate('yy-mm-dd', date);
            return [ ["2020-08-30", "2020-09-06", "2020-09-13", "2020-09-20", "2020-09-27"] .indexOf(string) == -1 ]
        }
    }).on("input change", function (e) {
        filterNodesAndRedraw();
    });
    $("#toggle-sidebar").click(function() {
        if ($("#info" ).hasClass("minimized")) {
            $("#info" ).removeClass("minimized")
        } else {
            $("#info" ).addClass("minimized")
        }
    })
    $("#hide_rof").change(function () {
        hide_rof = false;
        if (this.checked) hide_rof = true;
        filterNodesAndRedraw();
    });

    $("#hide_lsi").change(function () {
        hide_lsi = false;
        if (this.checked) hide_lsi = true;
        filterNodesAndRedraw();
    });

    $("#only_for_this_date").change(function () {
        only_for_selected_date = false;
        if (this.checked) only_for_selected_date = true;
        filterNodesAndRedraw();
    });

    $("#hide_no_child").change(function () {
        hide_no_child = false;
        if (this.checked) hide_no_child = true;
        filterNodesAndRedraw();
    });
});