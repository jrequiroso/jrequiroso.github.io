const STOPWORDS = ["a", "about", "above", "above", "across", "after", "afterwards", "again", "against", "all", "almost", "alone", "along", "already", "also","although","always","am","among", "amongst", "amoungst", "amount",  "an", "and", "another", "any","anyhow","anyone","anything","anyway", "anywhere", "are", "around", "as",  "at", "back","be","became", "because","become","becomes", "becoming", "been", "before", "beforehand", "behind", "being", "below", "beside", "besides", "between", "beyond", "bill", "both", "bottom","but", "by", "call", "can", "cannot", "cant", "co", "con", "could", "couldnt", "cry", "de", "describe", "detail", "do", "done", "down", "due", "during", "each", "eg", "eight", "either", "eleven","else", "elsewhere", "empty", "enough", "etc", "even", "ever", "every", "everyone", "everything", "everywhere", "except", "few", "fifteen", "fify", "fill", "find", "fire", "first", "five", "for", "former", "formerly", "forty", "found", "four", "from", "front", "full", "further", "get", "give", "go", "had", "has", "hasnt", "have", "he", "hence", "her", "here", "hereafter", "hereby", "herein", "hereupon", "hers", "herself", "him", "himself", "his", "how", "however", "hundred", "ie", "if", "in", "inc", "indeed", "interest", "into", "is", "it", "its", "itself", "keep", "last", "latter", "latterly", "least", "less", "ltd", "made", "many", "may", "me", "meanwhile", "might", "mill", "mine", "more", "moreover", "most", "mostly", "move", "much", "must", "my", "myself", "name", "namely", "neither", "never", "nevertheless", "next", "nine", "no", "nobody", "none", "noone", "nor", "not", "nothing", "now", "nowhere", "of", "off", "often", "on", "once", "one", "only", "onto", "or", "other", "others", "otherwise", "our", "ours", "ourselves", "out", "over", "own","part", "per", "perhaps", "please", "put", "rather", "re", "same", "see", "seem", "seemed", "seeming", "seems", "serious", "several", "she", "should", "show", "side", "since", "sincere", "six", "sixty", "so", "some", "somehow", "someone", "something", "sometime", "sometimes", "somewhere", "still", "such", "system", "take", "ten", "than", "that", "the", "their", "them", "themselves", "then", "thence", "there", "thereafter", "thereby", "therefore", "therein", "thereupon", "these", "they", "thickv", "thin", "third", "this", "those", "though", "three", "through", "throughout", "thru", "thus", "to", "together", "too", "top", "toward", "towards", "twelve", "twenty", "two", "un", "under", "until", "up", "upon", "us", "very", "via", "was", "we", "well", "were", "what", "whatever", "when", "whence", "whenever", "where", "whereafter", "whereas", "whereby", "wherein", "whereupon", "wherever", "whether", "which", "while", "whither", "who", "whoever", "whole", "whom", "whose", "why", "will", "with", "within", "without", "would", "yet", "you", "your", "yours", "yourself", "yourselves", "the", 
                    "ako", "ikaw", "ka", "siya", "kami", "tayo", "kayo", "sila", "ko", "mo", "niya", "namin", "natin", "naten", "ninyo", "nila", "akin", "iyo", "kanya", "kanila", "amin", "atin", "inyo", "kanila",
                    "o", "oo", "ni", "at", "ng", "sa", "man", "maging", "hindi", "kapwa", "parehong", "hindi", "lamang", "kundi", "pati", "sapagkat", "dahil", "saka", "hindi", "pero", "datapwat", "ngunit", "subalit", "kaya", "gayon pa man", "gayumpaman", "gayunman", "kung", "bagaman", "bagamat", "bago", "dahil", "kapag", "pag", "kasi", "dahilan", "gawa", "porke", "porket", "sapagkat", "pagkat", "kaysa", "kahit", "ganoong", "gayong", "gayon (in that case)", "kayat", "hanggang", "habang", "nang", "maging", "maliban", "palibhasa", "para", "upang", "parang", "samantala",
                    "tayong", "pangalawa", "naging", "ayaw", "did", "gustong", "thats", "bisan", "nilang", "like", "true", "really", "dont", "just", "tell", "actually", "ago", "diri", "far", "ganon", "ive", "let", "maybe", "nganong", "ngang", "nia", "non", "noon", "pina-", "pinaka", "puro", "shes", "yeah", "said", "talaga", "puwede", "talagang", "tingin", "bagong", "marami", "iyong", "una", "unang", "5th", "anu-anong", "ganun", "imbis", "isat", "lets", "rito", "basically", "bastat", "batay", "coming", "ewan", "grabe", "iisa", "bale", "dun", "hong", "aba", "ha", "iyon", "anu-ano", "bagay-bagay", "bat", "bawat", "yon", "yo", "unang-una", "tuwing", "taas", "siguro", "poy", "mismo", "mala", "kong", "kanino", "iyung", "im", "ibang", "dyan", "dati", "dati-rati", "baba",
                    "sino", "alam", "nandiyan", "tulad", "mahigit", "aking", "itong", "kumpara", "sino", "akong", "gawin", "gagawin", "iyan", "papaano", "tama", "narito", "nasa", "sina", "sunod", "riyan", "thank" ,"salamat", "seconds", "lahat", "dating", "buong", "magiging", "sinabi", "huling", "babalik", "nagbabalik", "bibigyan", "ilang", "kuha", "maaari", "ninyong", "noong", "oras", "paunti", "sabi", "sampung", "sorry", "segundo", "walang", "ayon", "bahagi", "beses", "hour", "ilan", "ngayon", "kanilang", "sinasabi", "dalawang", "bakit", "din", "oy", "yun", "yang", "wala", "sir", "oh", "niyong", "niyang", "nitong", "nga", "naming", "namang", "muli", "ma", "kanina", "huwag", "ganito", "eh", "doon", "dapat", "ayan", "anong", "aming", "tapos", "gusto", "maraming" ,"eto", "opo", "heto", "kay", "ok", "ah", "halos", "kada", "kabilang", "lagi", "lalo", "mang", "mayroon", "mula", "muna", "nagiging", "nito", "pagka", "pagkatapos", "pot", "meron", "acts", "dalawa", "yung", "daw", "di", "iba", "mas", "nina", "nung", "pang", "saan", "bang", "ho", "lang", "ano", "isa", "ring", "ari", "inyong", "okay", "kayong", "pa", "bilang", "isang", "ba", "sige", "rin", "ang", "mga", "ito", "na", "dito", "po", "pong", "ay", "mr", "si", "yan", "wag", "ating", "diyan", "naman", "natin", "nating", "niyo"];

const PARTICIPANTS = [ 'mar-roxas', 'jejomar-binay', 'grace-poe', 'rodrigo-duterte', 'miriam-santiago', 'all-candidates' ];

var tables = {};

function remove_stopwords(word_array)
{
    var filtered_word_array = [];
    $.each( word_array, function( i, word ) {
        if ( (word != "") && (word.length > 1) && !$.isNumeric(word) && $.inArray( word, STOPWORDS ) === -1) {
            filtered_word_array.push(word);
        }
    });
    filtered_word_array.sort();
    return filtered_word_array;
}

function count_words(word_array)
{
    const result = {};
    
    $.each( word_array, function( i, word ) {
        if (!result.hasOwnProperty(word)) {
            result[word] = 1;
        } else {
            result[word]++;
        }
    });
    return result;
}

function initTables()
{
    $('.cloud-container').empty();
    $('.cloud-container').append('<img class="ajax-loader" src="assets/img/ajax-loader.gif" />');
    
    $.each( PARTICIPANTS, function( i, participant ) {
        var word_array = [];
        var filtered_word_array = [];
        var total_words = 0;
        var unique_words = 0;
        var final_word_array = {}
        var final_table = '';

        $.get('references/1st/' + participant + '/all.txt', function(words) {
            word_array = words.split(" ");
            total_words = word_array.length;
            filtered_word_array = remove_stopwords(word_array);
            unique_words = filtered_word_array.length;
            $('.' + participant + '.total-words').text(total_words);
            $('.' + participant + '.unique-words').text(unique_words);
            final_word_array = count_words(filtered_word_array);
            final_table = '<table class="table table-striped table-hover " style="width: 80%;"><thead><tr><th>Word</th><th>Times Used</th></tr><thead><tbody>';
            
            $.each( final_word_array, function( word, count) {
                final_table += '<tr><td>'+ word +'</td><td>'+ count +'</td></tr>';
            });
            
            final_table += '</tbody><tfoot><tr><th>Word</th><th>Times Used</th></tr><tfoot></table>';
            $('.' + participant + '.cloud-container').empty();
            $('.' + participant + '.cloud-container').append(final_table);
            $('.' + participant +' .table').DataTable({
                "paging":   false,
                "info":     false,
                "order": [[ 1, "desc" ]],
                "oLanguage": { "sSearch": "" }
            });
            $('[type=search]').attr("placeholder", "    Search Words");
        });
    } )
    $("#search-main-keyword").keyup( function () {
        console.log('searching for ' + this.value);
        $('.mar-roxas .table').DataTable.fnFilterAll(this.value);
    });
    return false;
}

$(document).ready(function()
{
    initTables();
});