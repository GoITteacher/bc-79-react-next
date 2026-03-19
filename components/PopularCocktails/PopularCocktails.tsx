import CocktailCard from "./CocktailCard/CocktailCard";
import css from "./PopularCocktails.module.css";

const PopularCocktails = () => {
  const cocktails = [
    {
      _id: "639b6de9ff77d221f190c63d",
      drink: "Flying Scotchman",
      drinkThumb:
        "https://ftp.goit.study/img/drinkify/recipes/Flying_Scotchman.jpg",
      description:
        "Flying Scotchman is a bold and smoky cocktail that's perfect for those who appreciate the robust and complex flavors of Scotch whisky. This spirited libation combines Scotch whisky with Drambuie, a honey and herb liqueur, creating a drink that's rich in depth and character. It's a cocktail that's known for its smoky and herbal notes, making it a favorite choice for whisky enthusiasts. Sip on a Flying Scotchman and savor the boldness of this classic drink.",
    },
    {
      _id: "639b6de9ff77d221f190c5c2",
      drink: "Chicago Fizz",
      drinkThumb:
        "https://ftp.goit.study/img/drinkify/recipes/Chicago_Fizz.jpg",
      description:
        "Chicago Fizz is a bubbly and refreshing fizz cocktail that's perfect for those who enjoy the effervescence of classic fizz drinks. This invigorating libation combines gin with freshly squeezed lemon juice and soda, creating a zingy and revitalizing concoction. It's known for its lively and citrusy character, making it an excellent choice for brunch or a pick-me-up during a hot day. Sip on a Chicago Fizz and let its bubbly charm uplift your spirits.",
    },
    {
      _id: "639b6de9ff77d221f190c5c6",
      drink: "Corpse Reviver",
      drinkThumb:
        "https://ftp.goit.study/img/drinkify/recipes/Corpse_Reviver.jpg",
      description:
        "Corpse Reviver is a reviving and invigorating cocktail that lives up to its name. This potent drink combines a mix of spirits, such as gin and brandy, with a splash of herbal liqueur and citrus juice for a burst of freshness. The result is a cocktail that awakens your senses and revives your spirit. Sip on a Corpse Reviver and let its invigorating qualities bring you back to life.",
    },
    {
      _id: "639b6de9ff77d221f190c698",
      drink: "Espresso Martini",
      drinkThumb:
        "https://ftp.goit.study/img/drinkify/recipes/Espresso_Martini.jpg",
      description:
        "Espresso Martini is a sophisticated and coffee-forward cocktail that's perfect for those who appreciate the bold and invigorating flavors of coffee. This elegant libation combines vodka with coffee liqueur and freshly brewed espresso, creating a smooth and rich drink with a caffeine kick. It's a cocktail that's known for its coffee essence and the indulgent depth of espresso, making it a favorite choice for those who want to combine the pleasures of coffee and cocktails. Sip on an Espresso Martini and let its coffee-inspired elegance delight your palate.",
    },
    {
      _id: "639b6de9ff77d221f190c677",
      drink: "Mary Pickford",
      drinkThumb:
        "https://ftp.goit.study/img/drinkify/recipes/Mary_Pickford.jpg",
      description:
        "Mary Pickford is a fruity and rum-forward cocktail that's perfect for those who love the vibrant and tropical flavors of the Caribbean. This lively libation combines white rum with pineapple juice, grenadine, and maraschino liqueur, creating a colorful and exotic drink with a balance of sweetness, tartness, and tropical goodness. It's a cocktail that's known for its tropical flair and the fruity brightness of pineapple, making it a favorite choice for those who want to feel the Caribbean breeze in their glass. Sip on a Mary Pickford cocktail and let the sunshine in.",
    },
    {
      _id: "639b6de9ff77d221f190c520",
      drink: "Avalon",
      drinkThumb: "https://ftp.goit.study/img/drinkify/recipes/Avalon.jpg",
      description:
        "Avalon is a tropical and fruity cocktail that transports you to a sunny beach with its blend of rum and tropical fruit juices. It is made with white rum, pineapple juice, orange juice, and a splash of grenadine. The result is a vibrant and refreshing drink that captures the essence of paradise. Sit back, relax, and enjoy the taste of the tropics.",
    },
    {
      _id: "639b6de9ff77d221f190c55d",
      drink: "Jelly Bean",
      drinkThumb: "https://ftp.goit.study/img/drinkify/recipes/Jelly_Bean.jpg",
      description:
        "Jelly Bean is a playful and colorful cocktail that features a mix of fruity liqueurs and soda, resulting in a vibrant and fizzy drink. This whimsical beverage is perfect for parties or when you're in the mood for a fun and lighthearted drink experience. Enjoy the sweet and fruity flavors of Jelly Bean and let it add a burst of color to your day.",
    },
    {
      _id: "639b6de9ff77d221f190c64d",
      drink: "Kool-Aid Shot",
      drinkThumb:
        "https://ftp.goit.study/img/drinkify/recipes/Kool-Aid_Shot.jpg",
      description:
        "Kool-Aid Shot is a fun and fruity shooter that's perfect for those who enjoy playful and colorful drinks. This lighthearted shot combines Kool-Aid, a popular powdered drink mix, with vodka, creating a sweet and tangy sip that's as fun as its name suggests. It's a shooter that's all about letting loose and enjoying the moment. Take a Kool-Aid Shot and let the fruity fun begin.",
    },
    {
      _id: "639b6de9ff77d221f190c5b8",
      drink: "Cuba Libra",
      drinkThumb: "https://ftp.goit.study/img/drinkify/recipes/Cuba_Libra.jpg",
      description:
        "Cuba Libre is a refreshing and timeless cocktail that is synonymous with tropical vibes and relaxation. This iconic drink combines the smoothness of rum with the classic pairing of cola and a squeeze of lime juice. A touch of sweetness from simple syrup or sugar balances the flavors. The result is a thirst-quenching and invigorating cocktail that transports you to the sunny shores of Cuba. Sip on a Cuba Libre and embrace the spirit of the Caribbean.",
    },
    {
      _id: "639b6de9ff77d221f190c50d",
      drink: "Iced Coffee Fillip",
      drinkThumb:
        "https://ftp.goit.study/img/drinkify/recipes/Iced_Coffee_Fillip.jpg",
      description:
        "Iced Coffee Fillip is a cool and creamy beverage that combines the flavors of iced coffee, vanilla syrup, and chocolate sauce. It is made by blending ice, coffee, milk, vanilla syrup, and chocolate sauce together until smooth. The result is a refreshing and indulgent drink that is perfect for a hot summer day or as a pick-me-up in the afternoon.",
    },
  ];

  return (
    <div className={css["popularCocktails"]}>
      <ul className={css["cocktail-list"]}>
        {cocktails.map((el) => {
          return <CocktailCard cocktail={el} />;
        })}
      </ul>
    </div>
  );
};

export default PopularCocktails;
