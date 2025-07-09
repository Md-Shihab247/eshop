 
 const CountriesData = [
    {
        country : "United States",
        states : [
            {state : "California", cities: ["Los Angeles", "San Francisco", "San Diego", "Sacramento", "San Jose", "Fresno", "Long Beach", "Oakland", "Bakersfield", "Anaheim"] },
            {state : "Texas", cities: ["Houston", "Dallas", "Austin", "San Antonio", "Fort Worth", "El Paso", "Arlington", "Corpus Christi", "Plano", "Lubbock"]},
            {state : "Florida" ,cities: ["Miami", "Orlando" ,"Tampa" ,"Jacksonville" ,"St. Petersburg" ,"Tallahassee" ,"Fort Lauderdale" ,"Hialeah" ,"Gainesville" ,"Sarasota"]},
            {state : "New York" ,cities: ["New York City" ,"Buffalo" ,"Rochester" ,"Yonkers" ,"Syracuse" ,"Albany" ,"New Rochelle" ,"Mount Vernon" ,"Schenectady" ,"Utica"]},
            {state : "Illinois" ,cities: ["Chicago " ,"Aurora" ,"Rockford" ,"Naperville" ,"Joliet" ,"Springfield" ,"Peoria" ,"Elgin" ,"Waukegan" ,"Champaign"]},
            {state : "Ohio" ,cities: ["Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron", "Dayton", "Parma", "Canton", "Youngstown", "Lorain"]},
            {state : "Georgia" ,cities: ["Atlanta", "Augusta", "Savannah", "Macon", "Columbus", "Athens", "Sandy Springs", "Roswell", "Albany", "Johns Creek"]},
            {state : "Pennsylvania" ,cities: ["Philadelphia", "Pittsburgh", "Allentown", "Erie", "Reading", "Scranton", "Bethlehem", "Lancaster", "Harrisburg", "York"]},
            {state : "Arizona" ,cities: ["Phoenix", "Tucson", "Mesa", "Chandler", "Glendale", "Scottsdale", "Gilbert", "Tempe", "Peoria", "Surprise"]},
            {state : "Washington" ,cities: ["Seattle" ,"Spokane", "Tacoma", "Vancouver", "Bellevue", "Kent", "Everett", "Renton", "Bellingham", "Yakima"]}
        ]
    },

    {
        country : "Canada",
        states : [
            {state : "Ontario", cities: ["Toronto", "Ottawa", "Mississauga", "Brampton", "Hamilton", "London", "Markham", "Vaughan", "Kitchener", "Windsor"]},
            {state : "Quebec", cities: ["Montreal", "Quebec City", "Laval", "Gatineau", "Longueuil", "Sherbrooke", "Saguenay", "Trois-Rivières", "Terrebonne", "Lévis"]},
            {state : "British Columbia" ,cities: ["Vancouver", "Surrey", "Burnaby", "Richmond", "Abbotsford", "Coquitlam", "Kelowna", "Victoria", "Nanaimo", "Kamloops"]},
            {state : "Alberta" ,cities: ["Calgary", "Edmonton", "Red Deer", "Lethbridge", "St. Albert", "Medicine Hat", "Grande Prairie", "Airdrie", "Spruce Grove", "Leduc"]},
            {state : "Manitoba" ,cities: ["Winnipeg ", "Brandon ", "Steinbach",  "Thompson",  "Portage la Prairie", "Winkler",  "Selkirk", "Dauphin", "Morden", "Flin Flon"]},
            {state : "Saskatchewan" ,cities: ["Saskatoon", "Regina", "Prince Albert", "Moose Jaw", "Yorkton", "Swift Current", "North Battleford", "Estevan", "Lloydminster", "Weyburn"]},
            {state : "Nova Scotia" ,cities: ["Halifax", "Sydney", "Truro", "New Glasgow", "Kentville", "Bridgewater", "Amherst", "Yarmouth", "Antigonish", "Lunenburg"]},
            {state : "New Brunswick" ,cities: ["Moncton", "Saint John", "Fredericton", "Dieppe", "Bathurst", "Miramichi", "Edmundston", "Campbellton", "Oromocto", "Sackville"]},
            {state : "Newfoundland" ,cities: ["St. John’s", "Mount Pearl","Corner Brook","Gander","Grand Falls-Windsor","Happy Valley-Goose Bay","Labrador City","Stephenville","Clarenville","Carbonear"]},
            {state : "Prince Edward Island" ,cities: ["Charlottetown", "Summerside", "Stratford", "Cornwall", "Montague", "Souris", "Alberton", "Tignish", "Georgetown", "Kensington"]}
        ]
    },

    {
    country: "India",
    states: [
        {state: "Maharashtra",cities: ["Mumbai", "Pune", "Nagpur", "Nashik", "Thane", "Aurangabad", "Kolhapur", "Solapur", "Amravati", "Navi Mumbai"]},
        {state: "Karnataka",cities: ["Bengaluru", "Mysuru", "Mangaluru", "Hubli", "Belagavi", "Shivamogga", "Davangere", "Tumakuru", "Ballari", "Udupi"]},
        {state: "Tamil Nadu",cities: ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Erode", "Vellore", "Tirunelveli", "Thoothukudi", "Dindigul"]},
        {state: "Uttar Pradesh",cities: ["Lucknow", "Kanpur", "Ghaziabad", "Agra", "Varanasi", "Meerut", "Allahabad", "Noida", "Bareilly", "Aligarh"] },
        {state: "West Bengal",cities: ["Kolkata", "Asansol", "Siliguri", "Durgapur", "Howrah", "Bardhaman", "Malda", "Kharagpur", "Darjeeling", "Haldia"]},
        {state: "Rajasthan",cities: ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer", "Bikaner", "Alwar", "Bhilwara", "Sikar", "Pali"]},
        {state: "Gujarat",cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Gandhinagar", "Junagadh", "Anand", "Nadiad"]},
        {state: "Bihar",cities: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia", "Darbhanga", "Arrah", "Begusarai", "Katihar", "Munger"]},
        {state: "Madhya Pradesh",cities: ["Bhopal", "Indore", "Jabalpur", "Gwalior", "Ujjain", "Sagar", "Ratlam", "Dewas", "Satna", "Rewa"]},
        {state: "Telangana",cities: ["Hyderabad", "Warangal", "Nizamabad", "Khammam", "Karimnagar", "Ramagundam", "Mahbubnagar", "Adilabad", "Siddipet", "Miryalaguda"]}
     ]
    },

    {
    country: "Australia",
    states: [
        {state: "New South Wales",cities: ["Sydney", "Newcastle", "Wollongong", "Maitland", "Albury", "Wagga Wagga", "Coffs Harbour", "Tamworth", "Port Macquarie", "Dubbo"]},
        {state: "Victoria",cities: ["Melbourne", "Geelong", "Ballarat", "Bendigo", "Shepparton", "Melton", "Mildura", "Warrnambool", "Traralgon", "Wodonga"]},
        {state: "Queensland",cities: ["Brisbane", "Gold Coast", "Cairns", "Townsville", "Toowoomba", "Rockhampton", "Mackay", "Bundaberg", "Hervey Bay", "Gladstone"]},
        {state: "Western Australia",cities: ["Perth", "Mandurah", "Bunbury", "Geraldton", "Albany", "Kalgoorlie", "Karratha", "Broome", "Port Hedland", "Esperance"]},
        {state: "South Australia",cities: ["Adelaide", "Mount Gambier", "Whyalla", "Gawler", "Murray Bridge", "Port Lincoln", "Port Pirie", "Victor Harbor", "Port Augusta", "Wallaroo"]},
        {state: "Tasmania",cities: ["Hobart", "Launceston", "Devonport", "Burnie", "Ulverstone", "Kingston", "Glenorchy", "Howrah", "New Norfolk", "Bridgewater"]},
        {state: "Australian Capital Territory",cities: ["Canberra", "Belconnen", "Gungahlin", "Tuggeranong", "Woden", "Kingston", "Manuka", "Fyshwick", "Narrabundah", "Braddon"]},
        {state: "Northern Territory",cities: ["Darwin", "Alice Springs", "Palmerston", "Katherine", "Nhulunbuy", "Tennant Creek", "Jabiru", "Yulara", "Humpty Doo", "Berry Springs"] }
    ]
    },

    {
    country: "Brazil",
    states: [
        { state: "São Paulo", cities: ["São Paulo", "Campinas", "Santos", "São Bernardo do Campo", "Guarulhos", "Sorocaba", "Ribeirão Preto", "São José dos Campos", "Santo André", "Bauru"]},
        { state: "Rio de Janeiro", cities: ["Rio de Janeiro", "Niterói", "Duque de Caxias", "Nova Iguaçu", "Campos dos Goytacazes", "São Gonçalo", "Petrópolis", "Volta Redonda", "Macaé", "Angra dos Reis"]},
        { state: "Minas Gerais", cities: ["Belo Horizonte", "Contagem", "Uberlândia", "Juiz de Fora", "Montes Claros", "Betim", "Governador Valadares", "Ipatinga", "Divinópolis", "Uberaba"]},
        { state: "Bahia", cities: ["Salvador", "Feira de Santana", "Vitória da Conquista", "Camaçari", "Itabuna", "Ilhéus", "Jequié", "Lauro de Freitas", "Alagoinhas", "Barreiras"]},
        { state: "Paraná", cities: ["Curitiba", "Londrina", "Maringá", "Ponta Grossa", "Cascavel", "Foz do Iguaçu", "São José dos Pinhais", "Colombo", "Guarapuava", "Toledo"]},
        { state: "Rio Grande do Sul", cities: ["Porto Alegre", "Caxias do Sul", "Pelotas", "Canoas", "Santa Maria", "Gravataí", "Novo Hamburgo", "Rio Grande", "Viamão", "Passo Fundo"]},
        { state: "Pernambuco", cities: ["Recife", "Jaboatão dos Guararapes", "Olinda", "Petrolina", "Caruaru", "Paulista", "Cabo de Santo Agostinho", "Camaragibe", "Garanhuns", "Igarassu"]},
        { state: "Ceará", cities: ["Fortaleza", "Caucaia", "Juazeiro do Norte", "Maracanaú", "Sobral", "Crato", "Itapipoca", "Quixadá", "Iguatu", "Canindé"]},
        { state: "Pará", cities: ["Belém", "Ananindeua", "Santarém", "Marabá", "Castanhal", "Parauapebas", "Altamira", "Bragança", "Tucuruí", "Barcarena"]},
        { state: "Amazonas", cities: ["Manaus", "Parintins", "Itacoatiara", "Manacapuru", "Coari", "Tefé", "Tabatinga", "Humaitá", "Maués", "Lábrea"]}
    ]
    },

    {
    country: "Japan",
    states: [
        { state: "Tokyo", cities: ["Tokyo", "Hachioji", "Machida", "Fuchu", "Tachikawa", "Koganei", "Nerima", "Setagaya", "Shinjuku", "Chiyoda"]},
        { state: "Osaka", cities: ["Osaka", "Sakai", "Hirakata", "Toyonaka", "Takatsuki", "Matsubara", "Moriguchi", "Ibaraki", "Suita", "Kadoma"]},
        { state: "Kanagawa", cities: ["Yokohama", "Kawasaki", "Sagamihara", "Fujisawa", "Yamato", "Hiratsuka", "Kamakura", "Atsugi", "Odawara", "Chigasaki"]},
        { state: "Aichi", cities: ["Nagoya", "Toyota", "Okazaki", "Ichinomiya", "Kasugai", "Toyohashi", "Anjo", "Seto", "Kariya", "Inazawa"]},
        { state: "Hokkaido", cities: ["Sapporo", "Asahikawa", "Hakodate", "Kushiro", "Obihiro", "Tomakomai", "Otaru", "Kitami", "Ebetsu", "Muroran"]},
        { state: "Fukuoka", cities: ["Fukuoka", "Kitakyushu", "Kurume", "Omuta", "Iizuka", "Tagawa", "Nogata", "Chikushino", "Yukuhashi", "Munakata"]},
        { state: "Hyogo", cities: ["Kobe", "Himeji", "Amagasaki", "Nishinomiya", "Ashiya", "Akashi", "Kakogawa", "Takarazuka", "Toyooka", "Sumoto"]},
        { state: "Kyoto", cities: ["Kyoto", "Uji", "Kameoka", "Fukuchiyama", "Maizuru", "Nagaokakyo", "Yawata", "Miyazu", "Kyotanabe", "Ayabe"]},
        { state: "Saitama", cities: ["Saitama", "Kawaguchi", "Kawagoe", "Tokorozawa", "Koshigaya", "Ageo", "Fujimi", "Soka", "Misato", "Shiki"]},
        { state: "Hiroshima", cities: ["Hiroshima", "Fukuyama", "Kure", "Onomichi", "Mihara", "Shobara", "Hatsukaichi", "Takehara", "Otake", "Etajima"]}
    ]
    },
    
    {
    country: "Mexico",
    states: [
        { state: "Ciudad de México", cities: ["Ciudad de México", "Coyoacán", "Iztapalapa", "Tlalpan", "Xochimilco", "Gustavo A. Madero", "Benito Juárez", "Cuauhtémoc", "Miguel Hidalgo", "Álvaro Obregón"]},
        { state: "Jalisco", cities: ["Guadalajara", "Zapopan", "Tlaquepaque", "Tonalá", "Puerto Vallarta", "Tepatitlán", "Lagos de Moreno", "Ocotlán", "El Salto", "Autlán"]},
        { state: "Estado de México", cities: ["Ecatepec", "Nezahualcóyotl", "Naucalpan", "Toluca", "Tlalnepantla", "Chimalhuacán", "Atizapán", "Texcoco", "Cuautitlán Izcalli", "Metepec"]},
        { state: "Nuevo León", cities: ["Monterrey", "San Nicolás de los Garza", "Guadalupe", "Apodaca", "Santa Catarina", "San Pedro Garza García", "Escobedo", "Linares", "Sabinas Hidalgo", "Cadereyta"]},
        { state: "Puebla", cities: ["Puebla", "Tehuacán", "Atlixco", "San Martín Texmelucan", "Cholula", "Huauchinango", "Amozoc", "Zacatlán", "Teziutlán", "Izúcar de Matamoros"]},
        { state: "Guanajuato", cities: ["León", "Irapuato", "Celaya", "Guanajuato", "Salamanca", "Silao", "San Luis de la Paz", "San Miguel de Allende", "Dolores Hidalgo", "Valle de Santiago"]},
        { state: "Veracruz", cities: ["Veracruz", "Xalapa", "Coatzacoalcos", "Poza Rica", "Orizaba", "Córdoba", "Boca del Río", "Minatitlán", "Tuxpan", "Papantla"]},
        { state: "Chihuahua", cities: ["Chihuahua", "Ciudad Juárez", "Delicias", "Cuauhtémoc", "Hidalgo del Parral", "Nuevo Casas Grandes", "Camargo", "Jiménez", "Meoqui", "Saucillo"]},
        { state: "Yucatán", cities: ["Mérida", "Valladolid", "Tizimín", "Progreso", "Kanasín", "Motul", "Umán", "Tekax", "Izamal", "Hunucmá"]},
        { state: "Baja California", cities: ["Tijuana", "Mexicali", "Ensenada", "Rosarito", "Tecate", "San Felipe", "San Quintín", "La Rumorosa", "El Hongo", "Valle de Guadalupe"]}
    ]
    },

    {
    country: "Russia",
    states: [
        { state: "Moscow Oblast", cities: ["Khimki", "Podolsk", "Korolyov", "Mytishchi", "Lyubertsy", "Balashikha", "Elektrostal", "Serpukhov", "Zhukovsky", "Kolomna"]},
        { state: "Saint Petersburg", cities: ["Saint Petersburg", "Pushkin", "Kolpino", "Kronstadt", "Petergof", "Lomonosov", "Zelenogorsk", "Sestroretsk", "Gatchina", "Vsevolozhsk"]},
        { state: "Republic of Tatarstan", cities: ["Kazan", "Naberezhnye Chelny", "Almetyevsk", "Nizhnekamsk", "Zelenodolsk", "Bugulma", "Leninogorsk", "Chistopol", "Elabuga", "Aznakayevo"]},
        { state: "Krasnodar Krai", cities: ["Krasnodar", "Sochi", "Novorossiysk", "Armavir", "Anapa", "Gelendzhik", "Tuapse", "Yeysk", "Slavyansk-na-Kubani", "Timashevsk"]},
        { state: "Sverdlovsk Oblast", cities: ["Yekaterinburg", "Nizhny Tagil", "Kamensk-Uralsky", "Pervouralsk", "Severouralsk", "Asbest", "Serov", "Revda", "Nevyansk", "Polevskoy"]},
        { state: "Novosibirsk Oblast", cities: ["Novosibirsk", "Iskitim", "Berdsk", "Ob", "Kuybyshev", "Kolyvan", "Barabinsk", "Karasuk", "Toguchin", "Tatarsk"]},
        { state: "Republic of Bashkortostan", cities: ["Ufa", "Sterlitamak", "Salavat", "Neftekamsk", "Oktyabrsky", "Ishimbay", "Blagoveshchensk", "Beloretsk", "Mezhgorye", "Belebey"]},
        { state: "Chelyabinsk Oblast", cities: ["Chelyabinsk", "Magnitogorsk", "Zlatoust", "Miass", "Kopeysk", "Ozersk", "Snezhinsk", "Troitsk", "Kyshtym", "Kasli"]},
        { state: "Rostov Oblast", cities: ["Rostov-on-Don", "Taganrog", "Shakhty", "Novocherkassk", "Volgodonsk", "Azov", "Bataysk", "Aksay", "Novoshakhtinsk", "Gukovo"]},
        { state: "Primorsky Krai", cities: ["Vladivostok", "Ussuriysk", "Nakhodka", "Artyom", "Spassk-Dalny", "Partizansk", "Lesozavodsk", "Dalnerechensk", "Bolshoy Kamen", "Fokino"]}
    ]
    },

    {
    country: "Bangladesh",
    states: [
        {state: "Dhaka",cities: ["Dhaka", "Narayanganj", "Gazipur", "Tangail", "Manikganj", "Munshiganj", "Faridpur", "Madaripur", "Rajbari", "Gopalganj"]},
        {state: "Chattogram",cities: ["Chattogram", "Cox's Bazar", "Comilla", "Feni", "Noakhali", "Brahmanbaria", "Lakshmipur", "Chandpur", "Khagrachari", "Rangamati"]},
        {state: "Rajshahi",cities: ["Rajshahi", "Bogra", "Natore", "Naogaon", "Joypurhat", "Pabna", "Sirajganj", "Chapai Nawabganj", "Ishwardi", "Sherpur (Bogra)"]},
        {state: "Khulna",cities: ["Khulna", "Jessore", "Satkhira", "Bagerhat", "Magura", "Meherpur", "Narail", "Chuadanga", "Jhenaidah", "Kushtia"]},
        {state: "Barisal",cities: ["Barisal", "Patuakhali", "Bhola", "Pirojpur", "Barguna", "Jhalokathi", "Gournadi", "Banaripara", "Bakerganj", "Amtali"]},
        {state: "Sylhet",cities: ["Sylhet", "Moulvibazar", "Habiganj", "Sunamganj", "Beanibazar", "Golapganj", "Jaintiapur", "Zakiganj", "Srimangal", "Derai"]},
        {state: "Rangpur",cities: ["Rangpur", "Dinajpur", "Thakurgaon", "Kurigram", "Lalmonirhat", "Nilphamari", "Gaibandha", "Panchagarh", "Saidpur", "Biral"]},
        {state: "Mymensingh",cities: ["Mymensingh", "Jamalpur", "Netrokona", "Sherpur", "Gafargaon", "Trishal", "Ishwarganj", "Bhaluka", "Nandail", "Phulpur"]}
    ]
    },

    {
    country: "China",
    states: [
        { state: "Beijing", cities: ["Beijing", "Haidian", "Chaoyang", "Fengtai", "Dongcheng", "Xicheng", "Shijingshan", "Mentougou", "Tongzhou", "Changping"]},
        { state: "Shanghai", cities: ["Shanghai", "Pudong", "Minhang", "Xuhui", "Jing'an", "Baoshan", "Yangpu", "Changning", "Jiading", "Songjiang"]},
        { state: "Guangdong", cities: ["Guangzhou", "Shenzhen", "Dongguan", "Foshan", "Zhuhai", "Zhongshan", "Jiangmen", "Huizhou", "Maoming", "Zhanjiang"]},
        { state: "Zhejiang", cities: ["Hangzhou", "Ningbo", "Wenzhou", "Jiaxing", "Shaoxing", "Jinhua", "Taizhou", "Huzhou", "Lishui", "Quzhou"]},
        { state: "Jiangsu", cities: ["Nanjing", "Suzhou", "Wuxi", "Changzhou", "Yangzhou", "Zhenjiang", "Huai'an", "Yancheng", "Nantong", "Lianyungang"]},
        { state: "Sichuan", cities: ["Chengdu", "Mianyang", "Deyang", "Zigong", "Luzhou", "Nanchong", "Yibin", "Neijiang", "Ya'an", "Suining"]},
        { state: "Hubei", cities: ["Wuhan", "Yichang", "Xiangyang", "Jingzhou", "Shiyan", "Ezhou", "Huangshi", "Xiaogan", "Huanggang", "Enshi"]},
        { state: "Shandong", cities: ["Jinan", "Qingdao", "Yantai", "Weihai", "Zibo", "Linyi", "Dezhou", "Jining", "Dongying", "Taian"]},
        { state: "Fujian", cities: ["Fuzhou", "Xiamen", "Quanzhou", "Zhangzhou", "Putian", "Sanming", "Ningde", "Longyan", "Nanping", "Shaowu"]},
        { state: "Yunnan", cities: ["Kunming", "Dali", "Lijiang", "Baoshan", "Qujing", "Yuxi", "Pu'er", "Xishuangbanna", "Zhaotong", "Chuxiong"]}
    ]
    }
 ]

 export default CountriesData