export default function Family() {
  const vocabulary = [
    { word: "Father", meaning: "Cha", example: "My father is a doctor." },
    { word: "Mother", meaning: "Mẹ", example: "My mother loves to cook." },
    {
      word: "Brother",
      meaning: "Anh, em trai",
      example: "I have one brother.",
    },
    {
      word: "Sister",
      meaning: "Chị, em gái",
      example: "My sister is very kind.",
    },
    {
      word: "Grandfather",
      meaning: "Ông",
      example: "My grandfather loves to tell stories.",
    },
    {
      word: "Grandmother",
      meaning: "Bà",
      example: "My grandmother makes delicious meals.",
    },
    {
      word: "Uncle",
      meaning: "Chú, bác",
      example: "My uncle lives in the city.",
    },
    {
      word: "Aunt",
      meaning: "Cô, dì",
      example: "My aunt visits us every summer.",
    },
    {
      word: "Cousin",
      meaning: "Anh chị em họ",
      example: "I have three cousins.",
    },
    {
      word: "Son",
      meaning: "Con trai",
      example: "Their son is studying abroad.",
    },
    {
      word: "Daughter",
      meaning: "Con gái",
      example: "Their daughter plays the piano.",
    },
    {
      word: "Nephew",
      meaning: "Cháu trai",
      example: "My nephew just started school.",
    },
    { word: "Niece", meaning: "Cháu gái", example: "Her niece loves to draw." },
    {
      word: "Brother-in-law",
      meaning: "Thêm anh chị/em họ",
      example: "My brother-in-law is a lawyer.",
    },
    {
      word: "Sister-in-law",
      meaning: "Thêm chị em họ",
      example: "Her sister-in-law is very friendly.",
    },
    {
      word: "Father-in-law",
      meaning: "Cha vợ/chồng",
      example: "His father-in-law enjoys gardening.",
    },
    {
      word: "Mother-in-law",
      meaning: "Mẹ vợ/chồng",
      example: "Her mother-in-law cooks delicious food.",
    },
    {
      word: "Stepfather",
      meaning: "Cha dượng",
      example: "His stepfather supports him in everything.",
    },
    {
      word: "Stepmother",
      meaning: "Mẹ kế",
      example: "Her stepmother is very caring.",
    },
    {
      word: "Stepbrother",
      meaning: "Em trai kế",
      example: "My stepbrother and I get along well.",
    },
    {
      word: "Stepsister",
      meaning: "Em gái kế",
      example: "Her stepsister loves reading books.",
    },
    {
      word: "Twin",
      meaning: "Sinh đôi",
      example: "They are twins and look alike.",
    },
    {
      word: "Great-grandfather",
      meaning: "Óng bà",
      example: "Our great-grandfather lived a long life.",
    },
    {
      word: "Great-grandmother",
      meaning: "Ông bà",
      example: "Great-grandmother told us family history.",
    },
    {
      word: "Half-brother",
      meaning: "Anh/em trai cùng cha khác mẹ",
      example: "My half-brother lives overseas.",
    },
    {
      word: "Half-sister",
      meaning: "Anh/em gái cùng cha khác mẹ",
      example: "Her half-sister is an artist.",
    },
    {
      word: "Family",
      meaning: "Gia đình",
      example: "Family is very important to her.",
    },
    {
      word: "Parent",
      meaning: "Bố mẹ",
      example: "Parents should support their children.",
    },
    {
      word: "Child",
      meaning: "Con cái",
      example: "Every child deserves love.",
    },
    {
      word: "Grandchild",
      meaning: "Cháu",
      example: "They have two grandchildren.",
    },
    {
      word: "Sibling",
      meaning: "Anh chị em họ",
      example: "She has three siblings.",
    },
    {
      word: "Ancestor",
      meaning: "Tổ tiên",
      example: "Our ancestors lived in harmony with nature.",
    },
    {
      word: "Descendant",
      meaning: "Hậu duệ",
      example: "He is a descendant of kings.",
    },
    {
      word: "Extended family",
      meaning: "Gia đình mở rộng",
      example: "We often gather with our extended family.",
    },
    {
      word: "Immediate family",
      meaning: "Gia đình trực tiếp",
      example: "Her immediate family includes parents and siblings.",
    },
    {
      word: "In-law",
      meaning: "Thêm họ hàng thông qua hôn nhân",
      example: "She gets along well with her in-laws.",
    },
    {
      word: "Marriage",
      meaning: "Hôn nhân",
      example: "They celebrated their marriage anniversary.",
    },
    { word: "Divorce", meaning: "Ly dị", example: "The divorce was amicable." },
    {
      word: "Adoption",
      meaning: "Nhận con nuôi",
      example: "They decided on adoption to grow their family.",
    },
    {
      word: "Guardian",
      meaning: "Người giám hộ",
      example: "The guardian looks after the child.",
    },
    {
      word: "Fiancé",
      meaning: "Bạn đính hôn nam",
      example: "Her fiancé proposed last night.",
    },
    {
      word: "Fiancée",
      meaning: "Bạn đính hôn nữ",
      example: "Her fiancée is a software engineer.",
    },
    {
      word: "Relatives",
      meaning: "Họ hàng",
      example: "Relatives are coming for the reunion.",
    },
    {
      word: "Cohabitant",
      meaning: "Bạn sống chung",
      example: "They have been cohabitants for five years.",
    },
    {
      word: "Descendant",
      meaning: "Hậu duệ",
      example: "They are descendants of a famous writer.",
    },
    {
      word: "Patriarch",
      meaning: "Trùm gia đình",
      example: "The patriarch made all major decisions.",
    },
    {
      word: "Matriarch",
      meaning: "Bà gia đình",
      example: "The matriarch is revered by all family members.",
    },
    {
      word: "Family tree",
      meaning: "Cây gia phả",
      example: "She traced her family tree to Europe.",
    },
    {
      word: "Marriage certificate",
      meaning: "Giấy chứng nhận kết hôn",
      example: "They filed their marriage certificate last week.",
    },
    {
      word: "Engagement",
      meaning: "Sự đính hôn",
      example: "Their engagement was celebrated by friends and family.",
    },
    {
      word: "Wedding",
      meaning: "Đám cưới",
      example: "The wedding was held in a beautiful garden.",
    },
    {
      word: "Anniversary",
      meaning: "Ngày kỷ niệm",
      example: "They celebrated their tenth anniversary.",
    },
    {
      word: "Generation",
      meaning: "Thế hệ",
      example: "Each generation has its own challenges.",
    },
    {
      word: "Lineage",
      meaning: "Dòng dõi",
      example: "They pride themselves on their noble lineage.",
    },
    {
      word: "Kinship",
      meaning: "Quan hệ họ hàng",
      example: "Kinship ties are very strong in their culture.",
    },
    {
      word: "Blood relative",
      meaning: "Họ hàng máu mủ",
      example: "He discovered a blood relative in Canada.",
    },
    {
      word: "Stepfamily",
      meaning: "Gia đình ghép",
      example: "Blending into a stepfamily can take time.",
    },
    {
      word: "Household",
      meaning: "Hộ gia đình",
      example: "The household consists of five members.",
    },
    {
      word: "Ancestor",
      meaning: "Tổ tiên",
      example: "They honor their ancestors every year.",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-8 bg-gradient-to-r from-green-100 to-green-300 min-h-screen">
      <h1 className="text-5xl font-extrabold text-primary-dark-green mb-12 text-center">
        Từ Vựng Chủ Đề Gia Đình
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vocabulary.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-primary-dark-green mb-2">
              {item.word}
            </h2>
            <p className="text-lg text-gray-700 mb-1">
              <span className="font-medium">Nghĩa:</span> {item.meaning}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Ví dụ:</span> {item.example}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
