const questions = [
{
  question: "What are British values?",
  options: ["Democracy, rule of law, individual liberty, mutual respect, and tolerance", "Wearing traditional British clothes", "Learning British history", "Only following laws without question"],
  answer: "Democracy, rule of law, individual liberty, mutual respect, and tolerance",
  explanation: "British values include democracy, rule of law, individual liberty, and respect and tolerance for others.",
  userAnswer: null,
  flagged: false,
  no: 1
},
{
  question: "Which value emphasizes freedom of thought and belief?",
  options: ["Individual liberty", "Rule of law", "Community spirit", "Equality"],
  answer: "Individual liberty",
  explanation: "Individual liberty allows people to hold their own opinions and beliefs.",
  userAnswer: null,
  flagged: false,
  no: 2
},
{
  question: "What does 'rule of law' mean?",
  options: ["Everyone, including leaders, must follow the law", "Laws only apply to citizens", "Rules are suggestions", "Laws can be ignored by government officials"],
  answer: "Everyone, including leaders, must follow the law",
  explanation: "The rule of law ensures fair and equal application of laws.",
  userAnswer: null,
  flagged: false,
  no: 3
},
{
  question: "What is mutual respect?",
  options: ["Accepting and valuing others’ views even if you disagree", "Always agreeing with everyone", "Ignoring other people’s opinions", "Competing with others for respect"],
  answer: "Accepting and valuing others’ views even if you disagree",
  explanation: "Mutual respect means treating others with dignity, even when opinions differ.",
  userAnswer: null,
  flagged: false,
  no: 4
},
{
  question: "Why is tolerance important in the UK?",
  options: ["Allows people of different beliefs and backgrounds to live together peacefully", "Forces one religion on everyone", "Discourages cultural events", "Limits freedom of speech"],
  answer: "Allows people of different beliefs and backgrounds to live together peacefully",
  explanation: "Tolerance ensures harmony in a multi-faith and diverse society.",
  userAnswer: null,
  flagged: false,
  no: 5
},
{
  question: "Which of these is a responsibility of UK citizens?",
  options: ["Voting in elections", "Breaking minor laws", "Ignoring community issues", "Avoiding taxes"],
  answer: "Voting in elections",
  explanation: "Citizens are expected to take part in civic duties, including voting.",
  userAnswer: null,
  flagged: false,
  no: 6
},
{
  question: "What is community spirit?",
  options: ["People helping and supporting each other locally", "Competition between neighbours", "Living alone without contact", "Government-led volunteering"],
  answer: "People helping and supporting each other locally",
  explanation: "Community spirit is about working together and supporting each other.",
  userAnswer: null,
  flagged: false,
  no: 7
},
{
  question: "Which law protects people from discrimination?",
  options: ["Equality Act 2010", "Human Rights Act 1998", "Race Relations Act 1965", "Freedom of Information Act 2000"],
  answer: "Equality Act 2010",
  explanation: "The Equality Act protects individuals from unfair treatment and promotes equal opportunities.",
  userAnswer: null,
  flagged: false,
  no: 8
},
{
  question: "What is one way people can contribute to their community?",
  options: ["Volunteering, fundraising, joining community groups", "Avoiding involvement", "Protesting regularly", "Working abroad"],
  answer: "Volunteering, fundraising, joining community groups",
  explanation: "These activities help improve the local area and strengthen social bonds.",
  userAnswer: null,
  flagged: false,
  no: 9
},
{
  question: "What is the purpose of respecting diversity?",
  options: ["To ensure peaceful coexistence and equality", "To separate communities", "To enforce one culture", "To ignore differences"],
  answer: "To ensure peaceful coexistence and equality",
  explanation: "Respecting diversity means valuing people from all backgrounds and beliefs.",
  userAnswer: null,
  flagged: false,
  no: 10
},
{
  question: "What does the term 'multi-faith society' describe?",
  options: ["A society with people who follow different religions", "A country with one official religion", "A secular state with no religion", "A group that excludes religion"],
  answer: "A society with people who follow different religions",
  explanation: "The UK has people practicing multiple faiths who coexist peacefully.",
  userAnswer: null,
  flagged: false,
  no: 11
},
{
  question: "Which is the established church in England?",
  options: ["The Church of England", "The Catholic Church", "The Free Church", "The Methodist Church"],
  answer: "The Church of England",
  explanation: "The Church of England is the official state church, led by the monarch.",
  userAnswer: null,
  flagged: false,
  no: 12
},
{
  question: "Who is the Supreme Governor of the Church of England?",
  options: ["The King", "The Archbishop of Canterbury", "The Prime Minister", "The Pope"],
  answer: "The King",
  explanation: "The British monarch is the Supreme Governor of the Church of England.",
  userAnswer: null,
  flagged: false,
  no: 13
},
{
  question: "Which faith has the largest number of followers in the UK?",
  options: ["Christianity", "Islam", "Hinduism", "Sikhism"],
  answer: "Christianity",
  explanation: "Christianity is the largest religion, but the UK is multi-faith.",
  userAnswer: null,
  flagged: false,
  no: 14
},
{
  question: "What is a benefit of volunteering?",
  options: ["Meeting people and learning new skills", "Avoiding taxes", "Guaranteed employment", "Getting housing"],
  answer: "Meeting people and learning new skills",
  explanation: "Volunteering allows skill development and social interaction.",
  userAnswer: null,
  flagged: false,
  no: 15
},
{
  question: "What is St George’s Day associated with?",
  options: ["England", "Scotland", "Wales", "Northern Ireland"],
  answer: "England",
  explanation: "St George’s Day celebrates England’s patron saint.",
  userAnswer: null,
  flagged: false,
  no: 16
},
{
  question: "What is St Andrew’s Day associated with?",
  options: ["Scotland", "Wales", "Ireland", "England"],
  answer: "Scotland",
  explanation: "St Andrew’s Day celebrates Scotland’s patron saint.",
  userAnswer: null,
  flagged: false,
  no: 17
},
{
  question: "What is St David’s Day associated with?",
  options: ["Wales", "Scotland", "England", "Northern Ireland"],
  answer: "Wales",
  explanation: "St David’s Day celebrates Wales’s patron saint.",
  userAnswer: null,
  flagged: false,
  no: 18
},
{
  question: "What is St Patrick’s Day associated with?",
  options: ["Northern Ireland", "Scotland", "Wales", "England"],
  answer: "Northern Ireland",
  explanation: "St Patrick’s Day celebrates Ireland’s patron saint, observed in Northern Ireland.",
  userAnswer: null,
  flagged: false,
  no: 19
},
{
  question: "Which day is Remembrance Day in the UK?",
  options: ["11 November", "25 December", "1 January", "5 November"],
  answer: "11 November",
  explanation: "Remembrance Day honors those who died in wars.",
  userAnswer: null,
  flagged: false,
  no: 20
},
{
  question: "What flower symbolizes Remembrance Day?",
  options: ["Red poppy", "Rose", "Daffodil", "Thistle"],
  answer: "Red poppy",
  explanation: "The red poppy is worn in memory of fallen soldiers.",
  userAnswer: null,
  flagged: false,
  no: 21
},
{
  question: "What is the Big Society?",
  options: ["A government initiative to empower local communities", "A social media network", "A political group", "A business organisation"],
  answer: "A government initiative to empower local communities",
  explanation: "The Big Society encourages people to take active roles in improving their communities.",
  userAnswer: null,
  flagged: false,
  no: 22
},
{
  question: "Which of these shows respect and tolerance?",
  options: ["Listening to others’ opinions", "Ignoring everyone", "Forcing beliefs on others", "Criticizing different opinions"],
  answer: "Listening to others’ opinions",
  explanation: "Respect and tolerance involve valuing and considering others’ views.",
  userAnswer: null,
  flagged: false,
  no: 23
},
{
  question: "Why is community involvement important?",
  options: ["It strengthens local areas and brings people together", "It wastes time", "It only benefits politicians", "It creates competition"],
  answer: "It strengthens local areas and brings people together",
  explanation: "Community involvement builds stronger and more supportive neighborhoods.",
  userAnswer: null,
  flagged: false,
  no: 24
},
{
  question: "What is the main message of British values?",
  options: ["Everyone should contribute, respect others, and live peacefully together", "Focus only on yourself", "Communities should remain separate", "Ignore laws and rules"],
  answer: "Everyone should contribute, respect others, and live peacefully together",
  explanation: "British values promote respect, equality, and positive participation in society.",
  userAnswer: null,
  flagged: false,
  no: 25
},{
  question: "What is a key responsibility of UK citizens?",
  options: ["Voting in elections", "Ignoring local issues", "Breaking laws intentionally", "Avoiding taxes"],
  answer: "Voting in elections",
  explanation: "Citizens are expected to participate in democratic processes such as voting.",
  userAnswer: null,
  flagged: false,
  no: 1
},
{
  question: "Which of these is a legal duty for all UK residents?",
  options: ["Obeying the law", "Ignoring laws selectively", "Following only local rules", "Making up your own rules"],
  answer: "Obeying the law",
  explanation: "Everyone must follow the law to maintain a fair and safe society.",
  userAnswer: null,
  flagged: false,
  no: 2
},
{
  question: "What is one way people can participate in democracy?",
  options: ["Voting, standing for election, or joining a political party", "Ignoring elections", "Avoiding public debates", "Working abroad only"],
  answer: "Voting, standing for election, or joining a political party",
  explanation: "Participation in democracy strengthens the political system and community.",
  userAnswer: null,
  flagged: false,
  no: 3
},
{
  question: "What is the difference between a right and a responsibility?",
  options: ["Rights are freedoms; responsibilities are duties", "Rights are duties; responsibilities are freedoms", "They mean the same thing", "Responsibilities are optional, rights are not"],
  answer: "Rights are freedoms; responsibilities are duties",
  explanation: "Rights allow freedoms, while responsibilities are duties to others and society.",
  userAnswer: null,
  flagged: false,
  no: 4
},
{
  question: "Which right allows people to express opinions freely?",
  options: ["Freedom of speech", "Right to vote", "Right to privacy", "Freedom of assembly"],
  answer: "Freedom of speech",
  explanation: "Freedom of speech enables people to express their ideas and beliefs.",
  userAnswer: null,
  flagged: false,
  no: 5
},
{
  question: "Which law protects individuals’ human rights in the UK?",
  options: ["Human Rights Act 1998", "Equality Act 2010", "Criminal Justice Act", "Freedom of Information Act"],
  answer: "Human Rights Act 1998",
  explanation: "The Human Rights Act ensures basic freedoms such as speech, assembly, and privacy.",
  userAnswer: null,
  flagged: false,
  no: 6
},
{
  question: "Which responsibility relates to paying for public services?",
  options: ["Paying taxes", "Donating to friends only", "Ignoring bills", "Volunteering occasionally"],
  answer: "Paying taxes",
  explanation: "Taxes support essential public services like healthcare, education, and policing.",
  userAnswer: null,
  flagged: false,
  no: 7
},
{
  question: "What does the term 'active citizen' mean?",
  options: ["Someone who participates in society and helps the community", "Someone who stays at home", "Someone who ignores laws", "Someone who only works abroad"],
  answer: "Someone who participates in society and helps the community",
  explanation: "Active citizens engage in volunteering, voting, and supporting local initiatives.",
  userAnswer: null,
  flagged: false,
  no: 8
},
{
  question: "Which of these is a responsibility in your local community?",
  options: ["Volunteering, recycling, supporting local groups", "Ignoring local issues", "Breaking minor rules", "Only focusing on work"],
  answer: "Volunteering, recycling, supporting local groups",
  explanation: "Contributing locally strengthens communities and promotes sustainability.",
  userAnswer: null,
  flagged: false,
  no: 9
},
{
  question: "Which freedom allows people to follow their religion?",
  options: ["Freedom of religion", "Freedom of speech", "Freedom of assembly", "Right to privacy"],
  answer: "Freedom of religion",
  explanation: "People are free to practice their religion or belief without interference.",
  userAnswer: null,
  flagged: false,
  no: 10
},
{
  question: "Which freedom allows peaceful public gatherings?",
  options: ["Freedom of assembly", "Freedom of speech", "Freedom of religion", "Right to vote"],
  answer: "Freedom of assembly",
  explanation: "Freedom of assembly allows people to gather peacefully for meetings or demonstrations.",
  userAnswer: null,
  flagged: false,
  no: 11
},
{
  question: "Which of these is a responsibility when using your freedoms?",
  options: ["Respecting others’ rights", "Ignoring others’ opinions", "Doing whatever you want without limits", "Breaking laws if you disagree"],
  answer: "Respecting others’ rights",
  explanation: "Freedom comes with responsibility to ensure the rights of others are protected.",
  userAnswer: null,
  flagged: false,
  no: 12
},
{
  question: "Which of the following is a civic responsibility?",
  options: ["Voting in elections", "Sleeping at home", "Traveling abroad", "Shopping online"],
  answer: "Voting in elections",
  explanation: "Voting is a key way citizens participate in democracy.",
  userAnswer: null,
  flagged: false,
  no: 13
},
{
  question: "Which right ensures fair treatment by authorities?",
  options: ["Right to a fair trial", "Freedom of speech", "Freedom of religion", "Right to protest"],
  answer: "Right to a fair trial",
  explanation: "Everyone is entitled to a fair hearing under the law.",
  userAnswer: null,
  flagged: false,
  no: 14
},
{
  question: "Which responsibility involves protecting the environment?",
  options: ["Recycling and reducing waste", "Ignoring pollution", "Using more plastic", "Traveling only by car"],
  answer: "Recycling and reducing waste",
  explanation: "Taking care of the environment is part of civic duties in the UK.",
  userAnswer: null,
  flagged: false,
  no: 15
},
{
  question: "Which responsibility relates to the safety of others?",
  options: ["Following road rules", "Watching TV", "Sleeping in", "Ignoring signs"],
  answer: "Following road rules",
  explanation: "Obeying laws like traffic rules keeps everyone safe.",
  userAnswer: null,
  flagged: false,
  no: 16
},
{
  question: "Which freedom allows people to choose their leaders?",
  options: ["Right to vote", "Freedom of speech", "Freedom of assembly", "Right to privacy"],
  answer: "Right to vote",
  explanation: "Voting allows citizens to choose representatives democratically.",
  userAnswer: null,
  flagged: false,
  no: 17
},
{
  question: "Which of the following is a duty of citizens towards law enforcement?",
  options: ["Reporting crimes and cooperating with investigations", "Ignoring crimes", "Helping criminals", "Avoiding authorities"],
  answer: "Reporting crimes and cooperating with investigations",
  explanation: "Citizens support law and order by reporting crimes and assisting police when necessary.",
  userAnswer: null,
  flagged: false,
  no: 18
},
{
  question: "Which responsibility helps protect vulnerable people?",
  options: ["Volunteering or supporting charities", "Avoiding community work", "Ignoring issues", "Breaking minor laws"],
  answer: "Volunteering or supporting charities",
  explanation: "Helping others contributes to a fair and caring society.",
  userAnswer: null,
  flagged: false,
  no: 19
},
{
  question: "Which freedom protects people’s private life and home?",
  options: ["Right to privacy", "Freedom of speech", "Freedom of assembly", "Right to vote"],
  answer: "Right to privacy",
  explanation: "The right to privacy safeguards personal information and home life.",
  userAnswer: null,
  flagged: false,
  no: 20
},
{
  question: "Which responsibility helps maintain community health?",
  options: ["Following public health guidelines", "Ignoring hygiene", "Breaking quarantine rules", "Refusing vaccinations"],
  answer: "Following public health guidelines",
  explanation: "Following laws and health advice protects everyone in the community.",
  userAnswer: null,
  flagged: false,
  no: 21
},
{
  question: "Which responsibility involves fairness in workplaces and schools?",
  options: ["Treating others equally and without discrimination", "Favoring some people", "Ignoring policies", "Allowing bullying"],
  answer: "Treating others equally and without discrimination",
  explanation: "Respecting equality ensures everyone has fair opportunities.",
  userAnswer: null,
  flagged: false,
  no: 22
},
{
  question: "Which right allows people to complain about government decisions?",
  options: ["Freedom of expression", "Freedom of religion", "Right to vote", "Right to a fair trial"],
  answer: "Freedom of expression",
  explanation: "Freedom of expression lets people voice opinions about laws and policies.",
  userAnswer: null,
  flagged: false,
  no: 23
},
{
  question: "Which responsibility helps maintain safe communities?",
  options: ["Reporting crimes and dangerous situations", "Ignoring problems", "Breaking minor rules", "Avoiding police"],
  answer: "Reporting crimes and dangerous situations",
  explanation: "Alerting authorities helps prevent harm and protects the public.",
  userAnswer: null,
  flagged: false,
  no: 24
},
{
  question: "Which responsibility supports the democratic process?",
  options: ["Voting, respecting others’ opinions, and following the law", "Ignoring elections", "Protesting violently", "Breaking minor laws"],
  answer: "Voting, respecting others’ opinions, and following the law",
  explanation: "Active, responsible participation maintains a strong democracy.",
  userAnswer: null,
  flagged: false,
  no: 25
}, 
{
  question: "What is the process to become a UK citizen called?",
  options: ["Naturalisation", "Immigration", "Registration", "Residency"],
  answer: "Naturalisation",
  explanation: "Naturalisation is the legal process for foreign nationals to become UK citizens.",
  userAnswer: null,
  flagged: false,
  no: 1
},
{
  question: "Which of these is a requirement for naturalisation?",
  options: ["Living in the UK for at least 5 years", "Being born abroad without residence", "Working remotely outside the UK", "Never visiting the UK before application"],
  answer: "Living in the UK for at least 5 years",
  explanation: "Applicants must usually have lived in the UK for 5 years before applying for citizenship.",
  userAnswer: null,
  flagged: false,
  no: 2
},
{
  question: "Which test must applicants pass to become a UK citizen?",
  options: ["Life in the UK Test", "UK History Exam", "British Citizenship Quiz", "English Language Test Only"],
  answer: "Life in the UK Test",
  explanation: "The Life in the UK Test assesses knowledge of British history, culture, and society.",
  userAnswer: null,
  flagged: false,
  no: 3
},
{
  question: "Which language must applicants demonstrate proficiency in?",
  options: ["English, Welsh, or Scottish Gaelic", "French or German", "Only Latin", "Mandarin or Hindi"],
  answer: "English, Welsh, or Scottish Gaelic",
  explanation: "Applicants must prove ability in one of the UK’s official languages.",
  userAnswer: null,
  flagged: false,
  no: 4
},
{
  question: "Which ceremony finalises UK citizenship?",
  options: ["Oath of allegiance", "National holiday celebration", "Parliament visit", "Voting registration"],
  answer: "Oath of allegiance",
  explanation: "Citizenship is completed by taking an oath or affirmation of allegiance to the UK.",
  userAnswer: null,
  flagged: false,
  no: 5
},
{
  question: "Who must take the Oath of Allegiance?",
  options: ["All new citizens aged 18 and over", "All children under 10", "UK-born citizens", "Foreign tourists"],
  answer: "All new citizens aged 18 and over",
  explanation: "Adults formally pledge loyalty to the Crown during the ceremony.",
  userAnswer: null,
  flagged: false,
  no: 6
},
{
  question: "Which right do naturalised citizens gain immediately?",
  options: ["Right to vote in all elections", "Automatic royal title", "Tax exemption", "Free housing"],
  answer: "Right to vote in all elections",
  explanation: "Naturalised citizens can vote in general, local, and European elections.",
  userAnswer: null,
  flagged: false,
  no: 7
},
{
  question: "Which is a responsibility of all UK citizens?",
  options: ["Obeying the law", "Skipping taxes", "Ignoring elections", "Breaking rules occasionally"],
  answer: "Obeying the law",
  explanation: "All citizens must follow UK law to maintain social order.",
  userAnswer: null,
  flagged: false,
  no: 8
},
{
  question: "Which age group must pass the Life in the UK Test?",
  options: ["Applicants aged 18 and over", "Under 10", "Children between 11–17 only", "Everyone regardless of age"],
  answer: "Applicants aged 18 and over",
  explanation: "Adults taking the naturalisation route must complete the test.",
  userAnswer: null,
  flagged: false,
  no: 9
},
{
  question: "Which of these documents is needed for a citizenship application?",
  options: ["Passport or residence permit", "Driving licence only", "School ID card", "Library card"],
  answer: "Passport or residence permit",
  explanation: "Proof of identity and lawful residence is required for citizenship.",
  userAnswer: null,
  flagged: false,
  no: 10
},
{
  question: "How long must someone hold Indefinite Leave to Remain (ILR) before applying?",
  options: ["12 months", "1 month", "5 years", "10 years"],
  answer: "12 months",
  explanation: "Applicants usually must have held ILR for at least 12 months before naturalisation.",
  userAnswer: null,
  flagged: false,
  no: 11
},
{
  question: "Which is a reason for citizenship refusal?",
  options: ["Serious criminal convictions", "High income", "Being born abroad", "Working abroad temporarily"],
  answer: "Serious criminal convictions",
  explanation: "Certain criminal histories can prevent naturalisation.",
  userAnswer: null,
  flagged: false,
  no: 12
},
{
  question: "Which test includes questions about British values?",
  options: ["Life in the UK Test", "English grammar test", "Maths test", "Driving test"],
  answer: "Life in the UK Test",
  explanation: "The test includes questions on history, culture, and British values.",
  userAnswer: null,
  flagged: false,
  no: 13
},
{
  question: "What does an Oath of Allegiance pledge?",
  options: ["Loyalty to the Crown and UK laws", "Only to local government", "To a private organisation", "To a foreign country"],
  answer: "Loyalty to the Crown and UK laws",
  explanation: "Citizens pledge allegiance to the monarch and commitment to UK law.",
  userAnswer: null,
  flagged: false,
  no: 14
},
{
  question: "Which benefit do UK citizens have over residents?",
  options: ["Full political and social rights", "Free travel abroad", "Special tax exemption", "Automatic employment guarantee"],
  answer: "Full political and social rights",
  explanation: "Citizens gain rights like voting, running for office, and public service eligibility.",
  userAnswer: null,
  flagged: false,
  no: 15
},
{
  question: "Which principle is emphasised in the citizenship process?",
  options: ["Integration and respect for UK laws", "Ignoring local customs", "Prioritising foreign laws", "Exclusively preserving heritage"],
  answer: "Integration and respect for UK laws",
  explanation: "New citizens are expected to integrate and respect British society and laws.",
  userAnswer: null,
  flagged: false,
  no: 16
},
{
  question: "Which ceremony includes the pledge to ‘uphold rights and freedoms’?",
  options: ["Citizenship ceremony", "Wedding ceremony", "Birthday celebration", "Local council meeting"],
  answer: "Citizenship ceremony",
  explanation: "The citizenship ceremony includes an oath and a commitment to rights and responsibilities.",
  userAnswer: null,
  flagged: false,
  no: 17
},
{
  question: "Which type of residence is needed before naturalisation?",
  options: ["Indefinite Leave to Remain (ILR)", "Temporary visitor visa", "Tourist visa", "Student visa only"],
  answer: "Indefinite Leave to Remain (ILR)",
  explanation: "ILR allows the applicant to live permanently in the UK before applying for citizenship.",
  userAnswer: null,
  flagged: false,
  no: 18
},
{
  question: "Which of these shows loyalty to the UK?",
  options: ["Following laws, respecting values, and engaging in community life", "Ignoring UK customs", "Breaking minor laws", "Remaining isolated from society"],
  answer: "Following laws, respecting values, and engaging in community life",
  explanation: "Citizens show loyalty through lawful, respectful participation in society.",
  userAnswer: null,
  flagged: false,
  no: 19
},
{
  question: "Which benefit comes with UK citizenship in terms of travel?",
  options: ["UK passport", "Automatic visa to all countries", "Free international flights", "Exclusive airport lounges"],
  answer: "UK passport",
  explanation: "A UK passport allows visa-free or easier travel to many countries.",
  userAnswer: null,
  flagged: false,
  no: 20
},
{
  question: "Who decides if someone meets the requirements for citizenship?",
  options: ["Home Office", "Local council only", "Police", "The Prime Minister personally"],
  answer: "Home Office",
  explanation: "The Home Office assesses applications and ensures requirements are met.",
  userAnswer: null,
  flagged: false,
  no: 21
},
{
  question: "Which citizenship status allows voting and public service eligibility?",
  options: ["UK citizen", "Permanent resident only", "Visitor", "Temporary worker"],
  answer: "UK citizen",
  explanation: "Only citizens have full political rights and public service eligibility.",
  userAnswer: null,
  flagged: false,
  no: 22
},
{
  question: "Which of these is a core value tested in the Life in the UK Test?",
  options: ["Respect, democracy, and the rule of law", "Obedience only", "Exclusive national pride", "Ignoring others’ rights"],
  answer: "Respect, democracy, and the rule of law",
  explanation: "The test emphasises British values including respect, democracy, and fairness.",
  userAnswer: null,
  flagged: false,
  no: 23
},
{
  question: "Which ceremony marks the official start of UK citizenship?",
  options: ["Taking the Oath of Allegiance", "Life in the UK Test completion", "Receiving ILR", "First UK tax payment"],
  answer: "Taking the Oath of Allegiance",
  explanation: "The ceremony with the oath is the formal point at which citizenship is granted.",
  userAnswer: null,
  flagged: false,
  no: 24
},
{
  question: "Which of these responsibilities continues after gaining citizenship?",
  options: ["Obeying the law and participating in community life", "Ignoring rules", "Breaking laws occasionally", "Living abroad permanently"],
  answer: "Obeying the law and participating in community life",
  explanation: "Citizens maintain duties to respect the law and contribute to society.",
  userAnswer: null,
  flagged: false,
  no: 25
},
{
  question: "What does 'community' mean in the UK context?",
  options: ["A group of people living or working together locally", "A group of strangers passing by", "A government department", "A business organisation"],
  answer: "A group of people living or working together locally",
  explanation: "Community refers to people in a local area who interact, help each other, and share common interests.",
  userAnswer: null,
  flagged: false,
  no: 1
},
{
  question: "What is 'diversity' in UK communities?",
  options: ["People with different cultures, beliefs, and backgrounds living together", "Everyone being the same", "Excluding outsiders", "Only cultural events"],
  answer: "People with different cultures, beliefs, and backgrounds living together",
  explanation: "Diversity describes the mix of different backgrounds, faiths, and cultures in society.",
  userAnswer: null,
  flagged: false,
  no: 2
},
{
  question: "What does 'mutual respect' mean?",
  options: ["Valuing and accepting others' views even if you disagree", "Always agreeing with everyone", "Ignoring others’ opinions", "Competing for attention"],
  answer: "Valuing and accepting others' views even if you disagree",
  explanation: "Mutual respect means treating everyone with dignity and considering different opinions.",
  userAnswer: null,
  flagged: false,
  no: 3
},
{
  question: "What is the main benefit of community activities?",
  options: ["Bringing people together and supporting each other", "Causing disagreements", "Focusing on individual gain only", "Reducing social interaction"],
  answer: "Bringing people together and supporting each other",
  explanation: "Community activities strengthen local relationships and help improve neighbourhoods.",
  userAnswer: null,
  flagged: false,
  no: 4
},
{
  question: "Which of these is a way to contribute to your community?",
  options: ["Volunteering, fundraising, joining local groups", "Ignoring neighbours", "Moving frequently", "Working abroad exclusively"],
  answer: "Volunteering, fundraising, joining local groups",
  explanation: "Active involvement helps support and improve the local community.",
  userAnswer: null,
  flagged: false,
  no: 5
},
{
  question: "What is 'social cohesion'?",
  options: ["People in a community feeling connected and working together", "Excluding certain groups", "Strict law enforcement", "Economic competition"],
  answer: "People in a community feeling connected and working together",
  explanation: "Social cohesion is the sense of belonging and cooperation among members of a community.",
  userAnswer: null,
  flagged: false,
  no: 6
},
{
  question: "Which of these is an example of cultural diversity in the UK?",
  options: ["Different festivals, food, languages, and traditions", "All people wearing the same clothes", "Everyone speaking only English", "No cultural events allowed"],
  answer: "Different festivals, food, languages, and traditions",
  explanation: "Cultural diversity is seen through the variety of cultural practices and celebrations in the UK.",
  userAnswer: null,
  flagged: false,
  no: 7
},
{
  question: "Which of these is a core British value related to diversity?",
  options: ["Respect and tolerance for different backgrounds", "Ignoring differences", "Discrimination", "Segregation by community"],
  answer: "Respect and tolerance for different backgrounds",
  explanation: "British values emphasise respecting and tolerating all people, regardless of background.",
  userAnswer: null,
  flagged: false,
  no: 8
},
{
  question: "Which term describes helping neighbours or local groups?",
  options: ["Volunteering", "Protesting", "Ignoring", "Competing"],
  answer: "Volunteering",
  explanation: "Volunteering involves offering time or skills to benefit the community.",
  userAnswer: null,
  flagged: false,
  no: 9
},
{
  question: "Why is community spirit important?",
  options: ["It strengthens local relationships and helps everyone", "It allows people to compete aggressively", "It separates people into groups", "It discourages cooperation"],
  answer: "It strengthens local relationships and helps everyone",
  explanation: "Community spirit fosters support, cooperation, and a sense of belonging.",
  userAnswer: null,
  flagged: false,
  no: 10
},
{
  question: "Which of these festivals is an example of religious diversity in the UK?",
  options: ["Diwali, Eid, Christmas, Hanukkah", "Halloween only", "Bonfire Night only", "None of the above"],
  answer: "Diwali, Eid, Christmas, Hanukkah",
  explanation: "The UK celebrates many religious festivals, reflecting its multi-faith society.",
  userAnswer: null,
  flagged: false,
  no: 11
},
{
  question: "What is a 'multi-faith society'?",
  options: ["A society where people of different religions live together", "A country with one official religion", "A place with no religion", "A society that bans religion"],
  answer: "A society where people of different religions live together",
  explanation: "The UK is a multi-faith society with Christians, Muslims, Hindus, Sikhs, Jews, and others.",
  userAnswer: null,
  flagged: false,
  no: 12
},
{
  question: "Which of these is a national celebration of a patron saint in the UK?",
  options: ["St George’s Day, St Andrew’s Day, St David’s Day, St Patrick’s Day", "Halloween", "Valentine’s Day", "April Fool’s Day"],
  answer: "St George’s Day, St Andrew’s Day, St David’s Day, St Patrick’s Day",
  explanation: "Each nation in the UK has a patron saint celebrated annually.",
  userAnswer: null,
  flagged: false,
  no: 13
},
{
  question: "Which symbol represents Wales in national celebrations?",
  options: ["Red Dragon", "Lion", "Thistle", "Shamrock"],
  answer: "Red Dragon",
  explanation: "The red dragon is a national symbol of Wales, featured on the Welsh flag.",
  userAnswer: null,
  flagged: false,
  no: 14
},
{
  question: "Which symbol represents Scotland in national celebrations?",
  options: ["Thistle", "Rose", "Dragon", "Shamrock"],
  answer: "Thistle",
  explanation: "The thistle is the national emblem of Scotland.",
  userAnswer: null,
  flagged: false,
  no: 15
},
{
  question: "Which symbol represents England in national celebrations?",
  options: ["Rose", "Thistle", "Dragon", "Shamrock"],
  answer: "Rose",
  explanation: "The rose is the national emblem of England.",
  userAnswer: null,
  flagged: false,
  no: 16
},
{
  question: "Which symbol represents Northern Ireland in national celebrations?",
  options: ["Shamrock", "Rose", "Thistle", "Dragon"],
  answer: "Shamrock",
  explanation: "The shamrock is Northern Ireland’s national emblem.",
  userAnswer: null,
  flagged: false,
  no: 17
},
{
  question: "Which of these is a benefit of volunteering in the UK?",
  options: ["Meeting people, learning skills, helping society", "Skipping work", "Avoiding taxes", "Receiving government housing automatically"],
  answer: "Meeting people, learning skills, helping society",
  explanation: "Volunteering connects people, builds skills, and strengthens communities.",
  userAnswer: null,
  flagged: false,
  no: 18
},
{
  question: "Which UK public broadcaster promotes community and diversity?",
  options: ["BBC", "ITV", "Sky", "Channel 4 only for news"],
  answer: "BBC",
  explanation: "The BBC informs, educates, and entertains the public, reflecting diversity.",
  userAnswer: null,
  flagged: false,
  no: 19
},
{
  question: "What is a key aspect of respecting diversity?",
  options: ["Avoiding discrimination and valuing differences", "Treating everyone exactly the same", "Ignoring different cultures", "Promoting one culture only"],
  answer: "Avoiding discrimination and valuing differences",
  explanation: "Respecting diversity means recognising and valuing people’s differences.",
  userAnswer: null,
  flagged: false,
  no: 20
},
{
  question: "Which of these represents community help in the UK?",
  options: ["Local food banks, charities, and volunteer groups", "Private clubs only", "Government offices only", "None of the above"],
  answer: "Local food banks, charities, and volunteer groups",
  explanation: "Community support includes charities, volunteering, and helping local people in need.",
  userAnswer: null,
  flagged: false,
  no: 21
},
{
  question: "Which of these events celebrate cultural diversity in the UK?",
  options: ["Carnivals, food festivals, parades, music events", "Sports only", "Political campaigns only", "Shopping festivals only"],
  answer: "Carnivals, food festivals, parades, music events",
  explanation: "Diverse communities celebrate with festivals showcasing different cultures and traditions.",
  userAnswer: null,
  flagged: false,
  no: 22
},
{
  question: "Which principle supports everyone being treated equally in a community?",
  options: ["Equality and fairness", "Hierarchy only", "Segregation", "Exclusion of minorities"],
  answer: "Equality and fairness",
  explanation: "Equality ensures all individuals have the same opportunities and rights in society.",
  userAnswer: null,
  flagged: false,
  no: 23
},
{
  question: "What does celebrating national holidays promote in communities?",
  options: ["Unity, shared identity, and participation", "Division only", "Exclusivity", "Ignoring traditions"],
  answer: "Unity, shared identity, and participation",
  explanation: "National celebrations bring people together and strengthen community bonds.",
  userAnswer: null,
  flagged: false,
  no: 24
},
{
  question: "Which attitude helps communities thrive in the UK?",
  options: ["Respecting diversity, cooperating, volunteering", "Ignoring others, competition only, isolation", "Discrimination", "Exclusion of new residents"],
  answer: "Respecting diversity, cooperating, volunteering",
  explanation: "Thriving communities value respect, cooperation, and active participation.",
  userAnswer: null,
  flagged: false,
  no: 25
},
{
  question: "What does 'tolerance' mean in the UK context?",
  options: ["Accepting and respecting people’s differences", "Ignoring everyone around you", "Forcing others to follow your views", "Only interacting with similar people"],
  answer: "Accepting and respecting people’s differences",
  explanation: "Tolerance means accepting others’ beliefs, backgrounds, and lifestyles, even if they differ from your own.",
  userAnswer: null,
  flagged: false,
  no: 1
},
{
  question: "Why is respect important in a diverse society?",
  options: ["It allows everyone to live peacefully and cooperatively", "It encourages arguments", "It promotes inequality", "It is only important in schools"],
  answer: "It allows everyone to live peacefully and cooperatively",
  explanation: "Respect is essential for harmony in a society with different cultures, religions, and beliefs.",
  userAnswer: null,
  flagged: false,
  no: 2
},
{
  question: "Which UK law protects people from discrimination?",
  options: ["Equality Act 2010", "Human Rights Act 1980", "Race Relations Act 1950", "Discrimination Act 2005"],
  answer: "Equality Act 2010",
  explanation: "The Equality Act 2010 protects individuals from unfair treatment and promotes equal opportunities.",
  userAnswer: null,
  flagged: false,
  no: 3
},
{
  question: "Which of these is a protected characteristic under UK law?",
  options: ["Age, disability, religion, and gender", "Height and hobbies only", "Education and employment only", "Marital status only"],
  answer: "Age, disability, religion, and gender",
  explanation: "Protected characteristics include age, disability, gender reassignment, race, religion, sex, sexual orientation, and marriage/civil partnership.",
  userAnswer: null,
  flagged: false,
  no: 4
},
{
  question: "What is 'mutual respect'?",
  options: ["Treating others with dignity and valuing their views", "Always agreeing with others", "Ignoring people’s opinions", "Competing for attention"],
  answer: "Treating others with dignity and valuing their views",
  explanation: "Mutual respect involves listening, understanding, and valuing different perspectives.",
  userAnswer: null,
  flagged: false,
  no: 5
},
{
  question: "Which of these actions shows respect in everyday life?",
  options: ["Listening carefully, being polite, acknowledging differences", "Interrupting people constantly", "Ignoring rules and regulations", "Mocking others"],
  answer: "Listening carefully, being polite, acknowledging differences",
  explanation: "Everyday respect includes good manners, consideration, and valuing diversity.",
  userAnswer: null,
  flagged: false,
  no: 6
},
{
  question: "Why is tolerance important in the UK?",
  options: ["It helps communities live together peacefully", "It encourages segregation", "It prevents cooperation", "It is only a school rule"],
  answer: "It helps communities live together peacefully",
  explanation: "Tolerance allows people of different faiths, cultures, and backgrounds to coexist harmoniously.",
  userAnswer: null,
  flagged: false,
  no: 7
},
{
  question: "Which of these behaviours demonstrates intolerance?",
  options: ["Discrimination, bullying, or refusing to accept differences", "Helping neighbours", "Volunteering in community projects", "Celebrating diversity"],
  answer: "Discrimination, bullying, or refusing to accept differences",
  explanation: "Intolerance involves actions that harm or exclude people because of their differences.",
  userAnswer: null,
  flagged: false,
  no: 8
},
{
  question: "What is a benefit of respecting different cultures?",
  options: ["Better understanding, stronger communities, and fewer conflicts", "Isolation", "Competition only", "Segregation"],
  answer: "Better understanding, stronger communities, and fewer conflicts",
  explanation: "Respecting different cultures fosters learning, cooperation, and social cohesion.",
  userAnswer: null,
  flagged: false,
  no: 9
},
{
  question: "How can schools in the UK teach respect and tolerance?",
  options: ["Through multicultural lessons, anti-bullying programs, and inclusive policies", "By ignoring diversity", "By enforcing segregation", "Only teaching national history"],
  answer: "Through multicultural lessons, anti-bullying programs, and inclusive policies",
  explanation: "Education promotes understanding and respectful behaviour from a young age.",
  userAnswer: null,
  flagged: false,
  no: 10
},
{
  question: "Which festival encourages understanding of different religions?",
  options: ["Diwali, Eid, Christmas, Hanukkah", "Halloween only", "April Fool’s Day", "None of the above"],
  answer: "Diwali, Eid, Christmas, Hanukkah",
  explanation: "Celebrating diverse festivals helps people learn about different religions and traditions.",
  userAnswer: null,
  flagged: false,
  no: 11
},
{
  question: "Which of these shows respect in the workplace?",
  options: ["Listening to colleagues’ ideas, avoiding discrimination, treating everyone fairly", "Ignoring coworkers", "Talking over everyone", "Making assumptions based on appearance"],
  answer: "Listening to colleagues’ ideas, avoiding discrimination, treating everyone fairly",
  explanation: "Respect at work involves equality, fairness, and valuing others’ input.",
  userAnswer: null,
  flagged: false,
  no: 12
},
{
  question: "Which of these is considered a form of intolerance?",
  options: ["Racism, sexism, homophobia, or religious discrimination", "Volunteering", "Supporting charities", "Community events"],
  answer: "Racism, sexism, homophobia, or religious discrimination",
  explanation: "Intolerance includes prejudice or unfair treatment towards people based on identity or beliefs.",
  userAnswer: null,
  flagged: false,
  no: 13
},
{
  question: "Why is respecting laws important for tolerance?",
  options: ["It ensures everyone’s rights are protected", "It only benefits the government", "It stops community involvement", "It promotes conflict"],
  answer: "It ensures everyone’s rights are protected",
  explanation: "Following laws helps maintain fairness, equality, and social harmony.",
  userAnswer: null,
  flagged: false,
  no: 14
},
{
  question: "What does the term 'anti-discrimination' mean?",
  options: ["Actions or laws that prevent unfair treatment based on identity", "Allowing prejudice", "Ignoring equality", "Segregation of groups"],
  answer: "Actions or laws that prevent unfair treatment based on identity",
  explanation: "Anti-discrimination protects people from unfair treatment due to age, race, gender, religion, or other characteristics.",
  userAnswer: null,
  flagged: false,
  no: 15
},
{
  question: "Which of these represents mutual respect in communities?",
  options: ["Listening to neighbours and valuing their opinions", "Ignoring community rules", "Bullying newcomers", "Segregating groups"],
  answer: "Listening to neighbours and valuing their opinions",
  explanation: "Mutual respect strengthens relationships and promotes peaceful coexistence.",
  userAnswer: null,
  flagged: false,
  no: 16
},
{
  question: "What is the purpose of the Equality Act 2010?",
  options: ["To protect people from unfair treatment and promote equal opportunities", "To promote competition only", "To segregate communities", "To create separate schools"],
  answer: "To protect people from unfair treatment and promote equal opportunities",
  explanation: "The Equality Act ensures fairness and prevents discrimination in work, education, and services.",
  userAnswer: null,
  flagged: false,
  no: 17
},
{
  question: "Which behaviour shows respect online?",
  options: ["Avoiding harassment, cyberbullying, and sharing misinformation", "Spreading rumours", "Trolling others", "Ignoring facts"],
  answer: "Avoiding harassment, cyberbullying, and sharing misinformation",
  explanation: "Respect and tolerance apply both offline and online, including safe digital behaviour.",
  userAnswer: null,
  flagged: false,
  no: 18
},
{
  question: "Which of these values is essential for a tolerant society?",
  options: ["Equality, fairness, and inclusion", "Hierarchy only", "Exclusion", "Segregation"],
  answer: "Equality, fairness, and inclusion",
  explanation: "A tolerant society treats all people fairly and allows everyone to participate equally.",
  userAnswer: null,
  flagged: false,
  no: 19
},
{
  question: "Which action demonstrates tolerance in schools?",
  options: ["Accepting students of different cultures, religions, and abilities", "Bullying students", "Excluding minority groups", "Ignoring differences"],
  answer: "Accepting students of different cultures, religions, and abilities",
  explanation: "Schools encourage tolerance by creating inclusive environments for all students.",
  userAnswer: null,
  flagged: false,
  no: 20
},
{
  question: "Why is listening important for respect?",
  options: ["It shows others you value their opinions and experiences", "It allows you to dominate conversations", "It discourages communication", "It is only for formal meetings"],
  answer: "It shows others you value their opinions and experiences",
  explanation: "Active listening demonstrates respect and helps build understanding.",
  userAnswer: null,
  flagged: false,
  no: 21
},
{
  question: "Which of these is an example of celebrating diversity?",
  options: ["Multicultural festivals, food fairs, and parades", "Ignoring traditions", "Limiting cultural events", "Segregating communities"],
  answer: "Multicultural festivals, food fairs, and parades",
  explanation: "Celebrating diversity acknowledges and appreciates different cultures and traditions.",
  userAnswer: null,
  flagged: false,
  no: 22
},
{
  question: "Which of these attitudes harms tolerance?",
  options: ["Prejudice, stereotyping, and discrimination", "Empathy", "Understanding differences", "Volunteering"],
  answer: "Prejudice, stereotyping, and discrimination",
  explanation: "Negative attitudes prevent peaceful coexistence and equality.",
  userAnswer: null,
  flagged: false,
  no: 23
},
{
  question: "What is the main goal of promoting respect and tolerance?",
  options: ["Peaceful coexistence and equal opportunities for everyone", "Segregation", "Conflict", "Only benefiting certain groups"],
  answer: "Peaceful coexistence and equal opportunities for everyone",
  explanation: "Respect and tolerance aim to ensure fairness, understanding, and social harmony.",
  userAnswer: null,
  flagged: false,
  no: 24
},
{
  question: "Which of these shows respect in a multicultural society?",
  options: ["Valuing different languages, traditions, and beliefs", "Forcing everyone to conform", "Ignoring cultural practices", "Promoting prejudice"],
  answer: "Valuing different languages, traditions, and beliefs",
  explanation: "Respecting cultural differences helps communities thrive and reduces conflict.",
  userAnswer: null,
  flagged: false,
  no: 25
}
];


let paginationStartIndex = 0;
const paginationPageSize = 8;

let currentQuestionIndex = 0; 
let score = localStorage.getItem("score") || 0;
score = parseInt(score)

let questionsCorrect = JSON.parse(localStorage.getItem("questionsCorrect")) || [];
let questionsIncorrect = JSON.parse(localStorage.getItem("questionsIncorrect")) || [];
let questionsFlagged = JSON.parse(localStorage.getItem("questionsFlagged")) || [];
let questionsFlaggedTab8 = JSON.parse(localStorage.getItem("questionsFlaggedTab8")) || [];

function shuffleArr(arr){
  let newArr = [...arr];

  for(let i = newArr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  };

  return newArr.slice(0,30);
};

const shuffledArray = shuffleArr(questions);

function renderProgressBar(){
  const progressBar = document.querySelector(".progress-bar");
  const fill = progressBar.querySelector(".fill");

  const answeredCount = shuffledArray.filter(q => q.userAnswer).length;
  const percentage = (answeredCount/ shuffledArray.length)*100;

  fill.style.width = percentage + "%";
};


function renderPagination(){
  const pagination = document.querySelector(".numbers");
  pagination.innerHTML = "";

  const totalQuestions = shuffledArray.length;
  const endIndex = Math.min(paginationStartIndex + paginationPageSize, totalQuestions);


  if(paginationStartIndex > 0){
    const prevBtn = document.createElement("button");
    prevBtn.textContent = "<";
    prevBtn.classList.add("previous-button");
    prevBtn.addEventListener("click",()=>{
      paginationStartIndex = Math.max(0, paginationStartIndex - paginationPageSize);
      renderPagination();
      renderQuiz();
    });
    pagination.appendChild(prevBtn);
  };


  shuffledArray.slice(paginationStartIndex, endIndex).forEach((_, index) => {
      const actualIndex = paginationStartIndex + index;
    const btn = document.createElement("button");
    btn.classList.add("button");
    btn.textContent = paginationStartIndex + index + 1;

    if(paginationStartIndex + index === currentQuestionIndex){
      btn.classList.add("active");
    };

    const userAnswer = shuffledArray[actualIndex].userAnswer;

   
    btn.addEventListener("click", () => {
      currentQuestionIndex = paginationStartIndex + index;
      renderQuiz();
      updatePagination();
    });
    

    pagination.appendChild(btn);
  });

  if(paginationStartIndex + paginationPageSize < totalQuestions){
    const nextBtn = document.createElement("button");
    nextBtn.textContent = ">";
    nextBtn.classList.add("next-button");
    nextBtn.addEventListener("click",() => {
      paginationStartIndex = Math.min(totalQuestions - paginationPageSize, paginationStartIndex + paginationPageSize);
      renderQuiz();
      renderPagination();
    });
    pagination.appendChild(nextBtn);
  };
};

  const timeContainer = document.querySelector(".timer");


function renderTimer(){

  let minNo = 50;
  let secNo = 0;

  function updateDisplay(){
    timeContainer.innerHTML = `
  <p>${minNo.toString().padStart(2, "0")}:${secNo.toString().padStart(2 , "0")}</p>
  `;
  };
  updateDisplay();

  const interval = setInterval(() => {
    if(secNo === 0){
      if(minNo === 0){
        clearInterval(interval);
        window.location.href = "mockTestResult.html";
      }
      minNo--;
      secNo = 59;
    }else{
      secNo--;
    };
  updateDisplay();
  }, 1000);

 
};

function updatePagination(){
  const buttons = document.querySelectorAll(".numbers .button:not(.next-page)");
  buttons.forEach((btn, index) => {
    if (paginationStartIndex + index === currentQuestionIndex){
      btn.classList.add("active");
    } else{
      btn.classList.remove("active");
    };
  });
};

function renderQuiz(){
  const container = document.querySelector(".questions");
  const currentQuestion = shuffledArray[currentQuestionIndex];

  container.innerHTML = `
    <h2> Questions ${currentQuestionIndex + 1} of ${shuffledArray.length}.
    <h1>${currentQuestion.question}</h1>
      <div class="answers">
         ${currentQuestion.options.map(option => `<div class="ans">${option}</div>`).join('')}
      </div>
      <div class="errornoti">
        <div class="content">
        <h3>Incorrect</h3>
        <p>${currentQuestion.explanation}</p>
        </div>
      </div>
      <div class="buttons">
        <button class="previous"> Previous </button>
        <button class="flag"> Flag </button>
        <button class="next">Next</button>
      </div>
  `;



  const errorBox = document.querySelector(".errornoti");
  const nextButton = document.querySelector(".next");
  const flagButton = document.querySelector(".flag");
  const previousButton = document.querySelector(".previous");
  const opt = document.querySelectorAll(".ans");
  const flaggedNot = document.querySelector(".flagged");
  const flaggedNotBtn = flaggedNot.querySelector("button");
  const noticeQ = document.querySelector(".notice");
  const noticeQBtn = noticeQ.querySelector("button");
  let answered = false;




  const savedAnswer = currentQuestion.userAnswer;

    function checkForFlagged(){
  const flaggedQuestions = shuffledArray.filter(q => q.flagged);
  const unansweredQuestions = shuffledArray.filter(q => !q.flagged && !q.userAnswer);

  if(flaggedQuestions.length > 0){
    flaggedNot.style.display = "block";
  } else if(unansweredQuestions.length > 0){
    noticeQ.style.display = "block";
  }  else{
    window.location.href = "mockTestResult.html";
  };
};

flaggedNotBtn.addEventListener("click", () => {
  flaggedNot.style.display = "none";
});



  opt.forEach(option => {
   
    const selectedAnswer = option.textContent.trim();

    option.addEventListener("click", () => {
      opt.forEach(o => {
        o.classList.remove("blue-highlight");
      });

      answered = true;

      
      shuffledArray[currentQuestionIndex].userAnswer = selectedAnswer;
      renderProgressBar();
      
      opt.forEach(o => {
        option.classList.remove("blue-highlight");
      });
      option.classList.add("blue-highlight");

      nextButton.style.display = "block";
      
      if(selectedAnswer === currentQuestion.answer){
        questionsCorrect.push(currentQuestion);
        localStorage.setItem("questionsCorrect", JSON.stringify(questionsCorrect));
        console.log("correct");
      } else {
        questionsIncorrect.push(currentQuestion);
        localStorage.setItem("questionsIncorrect", JSON.stringify(questionsIncorrect));
        console.log("incorrect");
      };

      console.log(selectedAnswer);

    });

    if(selectedAnswer === shuffledArray[currentQuestionIndex].userAnswer){
      option.classList.add("blue-highlight");
      nextButton.style.display = "block";
      return;
    };

  });



  nextButton.addEventListener("click", () => {
    if(currentQuestionIndex === shuffledArray.length-1){
      checkForFlagged();
      return;
    }

    currentQuestionIndex++;
    console.log(currentQuestionIndex);
    if(currentQuestionIndex < shuffledArray.length){
      if(currentQuestionIndex >= paginationStartIndex + paginationPageSize){
        paginationStartIndex = Math.min(
          shuffledArray.length - paginationPageSize,
          paginationStartIndex + paginationPageSize
        );
      };
      renderQuiz();
      renderPagination(); 
    } 
  });

  noticeQBtn.addEventListener("click", (b) => {
    noticeQ.style.display = "none";
  });

  flagButton.addEventListener("click", () => {
    shuffledArray[currentQuestionIndex].flagged = true;

    const currentQuestion = shuffledArray[currentQuestionIndex];
    const alreadyFlagged = questionsFlaggedTab8.some(q => q.question === currentQuestion.question);

    currentQuestionIndex++;

    if(currentQuestionIndex < shuffledArray.length){
      if(currentQuestionIndex >= paginationStartIndex + paginationPageSize){
        paginationStartIndex += paginationPageSize;
      };
      renderQuiz();
      renderPagination();
    } else{
      checkForFlagged();
    };

    if(!alreadyFlagged){
    const flaggedQuestion = {...currentQuestion, no:currentQuestion.no};
      
    questionsFlagged.push(flaggedQuestion);
    questionsFlaggedTab8.push(flaggedQuestion);

    localStorage.setItem("questionsFlagged", JSON.stringify(questionsFlagged));
    localStorage.setItem("questionsFlaggedTab8", JSON.stringify(questionsFlaggedTab8));
    };

    
  });

    if(currentQuestionIndex === 0){
    previousButton.style.visibility = "hidden";
  } else{
    previousButton.style.visibility = "visible";
  };

  if(currentQuestion !== 0){
    previousButton.addEventListener("click", () => {
      if(currentQuestionIndex === 0) return;

    if(currentQuestionIndex >= 0){
       currentQuestionIndex--;

    console.log(currentQuestionIndex);

      if(currentQuestionIndex < paginationStartIndex){
        paginationStartIndex = Math.max(0, paginationStartIndex - paginationPageSize);
      };
    };
   

      renderQuiz();
      renderPagination();
  });
  }
};




renderQuiz();
renderPagination();
renderProgressBar();
renderTimer();
