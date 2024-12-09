export default function Environment() {
  const vocabulary = [
    {
      word: "Pollution",
      meaning: "Ô nhiễm",
      example: "Pollution is a serious problem in many cities.",
    },
    {
      word: "Climate",
      meaning: "Khí hậu",
      example: "The climate in this region is very hot.",
    },
    {
      word: "Recycling",
      meaning: "Tái chế",
      example: "Recycling helps protect the environment.",
    },
    {
      word: "Sustainability",
      meaning: "Sự bền vững",
      example: "Sustainability is important for future generations.",
    },
    {
      word: "Renewable Energy",
      meaning: "Năng lượng tái tạo",
      example:
        "Renewable energy sources like solar and wind are crucial for sustainability.",
    },
    {
      word: "Deforestation",
      meaning: "Phá rừng",
      example:
        "Deforestation leads to loss of biodiversity and contributes to climate change.",
    },
    {
      word: "Greenhouse Gases",
      meaning: "Khí nhà kính",
      example:
        "Reducing greenhouse gases is essential to mitigate global warming.",
    },
    {
      word: "Biodiversity",
      meaning: "Đa dạng sinh học",
      example: "Protecting biodiversity ensures ecosystem resilience.",
    },
    {
      word: "Conservation",
      meaning: "Bảo tồn",
      example: "Conservation efforts help preserve natural habitats.",
    },
    {
      word: "Carbon Footprint",
      meaning: "Dấu chân carbon",
      example:
        "Individuals can reduce their carbon footprint by using public transportation.",
    },
    {
      word: "Ecosystem",
      meaning: "Hệ sinh thái",
      example: "Healthy ecosystems provide essential services to humanity.",
    },
    {
      word: "Sustainable Development",
      meaning: "Phát triển bền vững",
      example:
        "Sustainable development balances economic growth with environmental protection.",
    },
    {
      word: "Organic Farming",
      meaning: "Nông nghiệp hữu cơ",
      example: "Organic farming reduces the use of harmful pesticides.",
    },
    {
      word: "Water Scarcity",
      meaning: "Kinh khô",
      example: "Water scarcity affects millions of people worldwide.",
    },
    {
      word: "Pollinator",
      meaning: "Côn trùng thụ phấn",
      example: "Bees are important pollinators for many crops.",
    },
    {
      word: "Emission",
      meaning: "Khí thải",
      example: "Industrial emissions contribute to air pollution.",
    },
    {
      word: "Composting",
      meaning: "Ủ phân hữu cơ",
      example: "Composting reduces waste and enriches the soil.",
    },
    {
      word: "Habitat Restoration",
      meaning: "Phục hồi môi trường sống",
      example: "Habitat restoration projects help endangered species recover.",
    },
    {
      word: "Eco-friendly",
      meaning: "Thân thiện với môi trường",
      example: "Using eco-friendly products reduces environmental impact.",
    },
    {
      word: "Climate Change",
      meaning: "Biến đổi khí hậu",
      example: "Climate change poses significant challenges to ecosystems.",
    },
    {
      word: "Marine Conservation",
      meaning: "Bảo tồn biển",
      example: "Marine conservation protects ocean biodiversity.",
    },
    {
      word: "Renewable Resources",
      meaning: "Tài nguyên tái tạo",
      example: "Wind and solar are examples of renewable resources.",
    },
    {
      word: "Reforestation",
      meaning: "Trồng lại cây rừng",
      example: "Reforestation helps combat deforestation and climate change.",
    },
    {
      word: "Sustainable Agriculture",
      meaning: "Nông nghiệp bền vững",
      example: "Sustainable agriculture practices maintain soil health.",
    },
    {
      word: "Waste Management",
      meaning: "Quản lý chất thải",
      example: "Effective waste management reduces pollution.",
    },
    {
      word: "Solar Power",
      meaning: "Năng lượng mặt trời",
      example: "Solar power is a clean and renewable energy source.",
    },
    {
      word: "Wind Energy",
      meaning: "Năng lượng gió",
      example: "Wind energy is harnessed using turbines.",
    },
    {
      word: "Organic Waste",
      meaning: "Chất thải hữu cơ",
      example: "Organic waste can be composted to enrich the soil.",
    },
    {
      word: "Electric Vehicle",
      meaning: "Xe điện",
      example: "Electric vehicles help reduce greenhouse gas emissions.",
    },
    {
      word: "Sustainable Transport",
      meaning: "Giao thông bền vững",
      example: "Biking and public transit are forms of sustainable transport.",
    },
    {
      word: "Carbon Neutral",
      meaning: "Carbon trung hòa",
      example:
        "Companies aim to become carbon neutral by offsetting emissions.",
    },
    {
      word: "Green Building",
      meaning: "Xây dựng xanh",
      example:
        "Green buildings use sustainable materials and energy-efficient designs.",
    },
    {
      word: "Organic Matter",
      meaning: "Chất hữu cơ",
      example: "Organic matter improves soil fertility.",
    },
    {
      word: "Environmental Policy",
      meaning: "Chính sách môi trường",
      example:
        "Environmental policies regulate pollution and conservation efforts.",
    },
    {
      word: "Sustainable Energy",
      meaning: "Năng lượng bền vững",
      example:
        "Investing in sustainable energy ensures long-term resource availability.",
    },
    {
      word: "Carbon Sink",
      meaning: "Ổ carbon",
      example:
        "Forests act as carbon sinks by absorbing CO2 from the atmosphere.",
    },
    {
      word: "Climate Mitigation",
      meaning: "Giảm nhẹ biến đổi khí hậu",
      example:
        "Climate mitigation strategies aim to reduce the severity of climate change.",
    },
    {
      word: "Erosion",
      meaning: "Xói mòn",
      example:
        "Soil erosion can be prevented with proper land management practices.",
    },
    {
      word: "Fossil Fuels",
      meaning: "Nhiên liệu hóa thạch",
      example:
        "Burning fossil fuels releases carbon dioxide into the atmosphere.",
    },
    {
      word: "Geoengineering",
      meaning: "Kỹ thuật địa kỹ thuật",
      example:
        "Geoengineering proposes large-scale interventions to combat climate change.",
    },
    {
      word: "Hydroelectric Power",
      meaning: "Năng lượng thủy điện",
      example: "Hydroelectric power generates electricity from flowing water.",
    },
    {
      word: "Landfill",
      meaning: "Bãi rác",
      example: "Landfills are sites for the disposal of waste materials.",
    },
    {
      word: "Natural Resource",
      meaning: "Tài nguyên thiên nhiên",
      example:
        "Sustainable use of natural resources is vital for the environment.",
    },
    {
      word: "Overfishing",
      meaning: "Bắt cá quá mức",
      example:
        "Overfishing depletes fish populations and disrupts marine ecosystems.",
    },
    {
      word: "Permafrost",
      meaning: "Đất băng vĩnh cửu",
      example: "Thawing permafrost releases stored greenhouse gases.",
    },
    {
      word: "Photovoltaic",
      meaning: "Hiệu điện thế quang",
      example: "Photovoltaic cells convert sunlight into electricity.",
    },
    {
      word: "Reclamation",
      meaning: "Phục hồi",
      example:
        "Land reclamation restores ecosystems damaged by human activities.",
    },
    {
      word: "Sustainable Forestry",
      meaning: "Lâm nghiệp bền vững",
      example:
        "Sustainable forestry ensures that timber harvesting does not deplete forests.",
    },
    {
      word: "Thermal Pollution",
      meaning: "Ô nhiễm nhiệt",
      example: "Thermal pollution from factories can harm aquatic life.",
    },
    {
      word: "Urbanization",
      meaning: "Đô thị hóa",
      example: "Urbanization can lead to habitat loss and increased pollution.",
    },
    {
      word: "Waste Reduction",
      meaning: "Giảm chất thải",
      example: "Waste reduction strategies include recycling and composting.",
    },
    {
      word: "Zero Emissions",
      meaning: "Không khí thải",
      example: "Zero emissions vehicles produce no tailpipe pollutants.",
    },
    {
      word: "Aquifer",
      meaning: "Chòm nước ngầm",
      example:
        "Aquifers store groundwater for agricultural and drinking purposes.",
    },
    {
      word: "Bioremediation",
      meaning: "Khử ô nhiễm sinh học",
      example:
        "Bioremediation uses microorganisms to clean up contaminated sites.",
    },
    {
      word: "Climate Resilience",
      meaning: "Khả năng chịu đựng khí hậu",
      example:
        "Climate resilience involves adapting infrastructure to withstand extreme weather.",
    },
    {
      word: "Ecological Footprint",
      meaning: "Dấu chân sinh thái",
      example:
        "Reducing your ecological footprint helps conserve natural resources.",
    },
    {
      word: "Green Technology",
      meaning: "Công nghệ xanh",
      example:
        "Green technology innovations aim to minimize environmental impact.",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-primary-dark-green mb-8">
        Từ Vựng Chủ Đề Môi Trường
      </h1>

      <div className="space-y-6">
        {vocabulary.map((item, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-primary-dark-green">
              {item.word}
            </h2>
            <p className="text-lg text-gray-700">Nghĩa: {item.meaning}</p>
            <p className="text-gray-600">Ví dụ: {item.example}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
