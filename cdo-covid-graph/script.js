
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
    { "added": "2020-09-21", "text": "CASE #582: 37-year old female from Brgy MACASANDIG; LOCAL CASE; exposed to Case #462; asymptomatic"}
]

var hide_lsi = false;
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
    var age_string = original_text.match(/\d*-year old/g);
    var age = age_string[0].replace('-year old', '');
    covidData[i].age = parseInt(age);
    
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
        color: color,
        caseType: type.replace(" ", '-'),
        font: {
            color: 'white',
            face: 'Lato',
        }
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

    dataCopy = dataCopy.filter(datarow => {
        return new Date(datarow.added) <= new Date($("#datepicker").val());
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
            return [ ["2020-08-30", "2020-09-06", "2020-09-13", "2020-09-20"] .indexOf(string) == -1 ]
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

    $("#hide_no_child").change(function () {
        hide_no_child = false;
        if (this.checked) hide_no_child = true;
        filterNodesAndRedraw();
    });
});