export interface StoryMeta {
  id: string;
  number: number;
  title: string;
  section: "old_testament" | "new_testament_jesus" | "new_testament_acts";
  category: string;
  hasContent: boolean; // true if scenes exist
}

export const OLD_TESTAMENT_STORIES: StoryMeta[] = [
  // Genesis
  { id: "creation", number: 1, title: "Creation of the World", section: "old_testament", category: "Genesis", hasContent: true },
  { id: "adam-eve", number: 2, title: "Adam and Eve", section: "old_testament", category: "Genesis", hasContent: true },
  { id: "cain-abel", number: 3, title: "Cain and Abel", section: "old_testament", category: "Genesis", hasContent: true },
  { id: "noah-flood", number: 4, title: "Noah and the Flood", section: "old_testament", category: "Genesis", hasContent: true },
  { id: "tower-babel", number: 5, title: "Tower of Babel", section: "old_testament", category: "Genesis", hasContent: true },
  { id: "call-abraham", number: 6, title: "Call of Abraham", section: "old_testament", category: "Genesis", hasContent: true },
  { id: "abraham-egypt", number: 7, title: "Abraham in Egypt", section: "old_testament", category: "Genesis", hasContent: true },
  { id: "abraham-lot", number: 8, title: "Abraham and Lot", section: "old_testament", category: "Genesis", hasContent: true },
  { id: "sodom-gomorrah", number: 9, title: "Destruction of Sodom and Gomorrah", section: "old_testament", category: "Genesis", hasContent: true },
  { id: "sacrifice-isaac", number: 10, title: "Sacrifice of Isaac", section: "old_testament", category: "Genesis", hasContent: true },
  { id: "rebekah-servant", number: 11, title: "Rebekah and the Servant", section: "old_testament", category: "Genesis", hasContent: true },
  { id: "jacob-esau", number: 12, title: "Jacob and Esau", section: "old_testament", category: "Genesis", hasContent: true },
  { id: "jacobs-dream", number: 13, title: "Jacob's Dream", section: "old_testament", category: "Genesis", hasContent: true },
  { id: "jacob-wrestles", number: 14, title: "Jacob Wrestles with the Angel", section: "old_testament", category: "Genesis", hasContent: true },
  { id: "joseph-sold", number: 15, title: "Joseph Sold by His Brothers", section: "old_testament", category: "Genesis", hasContent: true },
  { id: "joseph-potiphar", number: 16, title: "Joseph in Potiphar's House", section: "old_testament", category: "Genesis", hasContent: true },
  { id: "joseph-prison", number: 17, title: "Joseph in Prison", section: "old_testament", category: "Genesis", hasContent: true },
  { id: "joseph-dreams", number: 18, title: "Joseph Interprets Dreams", section: "old_testament", category: "Genesis", hasContent: true },
  { id: "joseph-brothers-egypt", number: 19, title: "Joseph and His Brothers in Egypt", section: "old_testament", category: "Genesis", hasContent: true },
  { id: "joseph-reconciles", number: 20, title: "Joseph Reconciles with His Brothers", section: "old_testament", category: "Genesis", hasContent: true },
  // Exodus
  { id: "birth-moses", number: 21, title: "Birth of Moses", section: "old_testament", category: "Exodus", hasContent: true },
  { id: "moses-flees", number: 22, title: "Moses Flees Egypt", section: "old_testament", category: "Exodus", hasContent: true },
  { id: "burning-bush", number: 23, title: "The Burning Bush", section: "old_testament", category: "Exodus", hasContent: true },
  { id: "moses-pharaoh", number: 24, title: "Moses Before Pharaoh", section: "old_testament", category: "Exodus", hasContent: true },
  { id: "plagues-egypt", number: 25, title: "The Plagues of Egypt", section: "old_testament", category: "Exodus", hasContent: true },
  { id: "passover", number: 26, title: "Passover", section: "old_testament", category: "Exodus", hasContent: true },
  { id: "crossing-red-sea", number: 27, title: "Crossing the Red Sea", section: "old_testament", category: "Exodus", hasContent: true },
  { id: "manna-desert", number: 28, title: "Manna in the Desert", section: "old_testament", category: "Exodus", hasContent: true },
  { id: "water-rock", number: 29, title: "Water from the Rock", section: "old_testament", category: "Exodus", hasContent: true },
  { id: "ten-commandments", number: 30, title: "The Ten Commandments", section: "old_testament", category: "Exodus", hasContent: true },
  // Numbers / Deuteronomy
  { id: "golden-calf", number: 31, title: "The Golden Calf", section: "old_testament", category: "Numbers / Deuteronomy", hasContent: true },
  { id: "spies-canaan", number: 32, title: "The Spies in Canaan", section: "old_testament", category: "Numbers / Deuteronomy", hasContent: true },
  { id: "rebellion-people", number: 33, title: "Rebellion of the People", section: "old_testament", category: "Numbers / Deuteronomy", hasContent: true },
  { id: "balaam-donkey", number: 34, title: "Balaam and the Donkey", section: "old_testament", category: "Numbers / Deuteronomy", hasContent: true },
  { id: "death-moses", number: 35, title: "Death of Moses", section: "old_testament", category: "Numbers / Deuteronomy", hasContent: true },
  // Joshua / Judges
  { id: "fall-jericho", number: 36, title: "Fall of Jericho", section: "old_testament", category: "Joshua / Judges", hasContent: true },
  { id: "sin-achan", number: 37, title: "Sin of Achan", section: "old_testament", category: "Joshua / Judges", hasContent: true },
  { id: "deborah-barak", number: 38, title: "Deborah and Barak", section: "old_testament", category: "Joshua / Judges", hasContent: true },
  { id: "gideon", number: 39, title: "Gideon", section: "old_testament", category: "Joshua / Judges", hasContent: true },
  { id: "samson", number: 40, title: "Samson", section: "old_testament", category: "Joshua / Judges", hasContent: true },
  // Ruth / Samuel
  { id: "ruth-naomi", number: 41, title: "Ruth and Naomi", section: "old_testament", category: "Ruth / Samuel", hasContent: true },
  { id: "samuel-called", number: 42, title: "Samuel Called by God", section: "old_testament", category: "Ruth / Samuel", hasContent: true },
  { id: "saul-king", number: 43, title: "Saul Becomes King", section: "old_testament", category: "Ruth / Samuel", hasContent: true },
  { id: "david-goliath", number: 44, title: "David and Goliath", section: "old_testament", category: "Ruth / Samuel", hasContent: true },
  { id: "david-saul", number: 45, title: "David and Saul", section: "old_testament", category: "Ruth / Samuel", hasContent: true },
  { id: "david-bathsheba", number: 46, title: "David and Bathsheba", section: "old_testament", category: "Ruth / Samuel", hasContent: true },
  // Kings / Chronicles
  { id: "solomon-wisdom", number: 47, title: "Solomon Asks for Wisdom", section: "old_testament", category: "Kings / Chronicles", hasContent: true },
  { id: "elijah-baal", number: 48, title: "Elijah vs Prophets of Baal", section: "old_testament", category: "Kings / Chronicles", hasContent: true },
  { id: "elisha-naaman", number: 49, title: "Elisha and Naaman", section: "old_testament", category: "Kings / Chronicles", hasContent: true },
  { id: "fall-jerusalem", number: 50, title: "Fall of Jerusalem", section: "old_testament", category: "Kings / Chronicles", hasContent: true },
];

export const NT_JESUS_STORIES: StoryMeta[] = [
  // Birth and Childhood
  { id: "annunciation", number: 1, title: "Annunciation to Mary", section: "new_testament_jesus", category: "Birth and Childhood", hasContent: true },
  { id: "birth-jesus", number: 2, title: "Birth of Jesus", section: "new_testament_jesus", category: "Birth and Childhood", hasContent: true },
  { id: "shepherds", number: 3, title: "Shepherds", section: "new_testament_jesus", category: "Birth and Childhood", hasContent: true },
  { id: "wise-men", number: 4, title: "Wise Men", section: "new_testament_jesus", category: "Birth and Childhood", hasContent: true },
  { id: "flight-egypt", number: 5, title: "Flight to Egypt", section: "new_testament_jesus", category: "Birth and Childhood", hasContent: true },
  { id: "jesus-temple", number: 6, title: "Jesus in the Temple", section: "new_testament_jesus", category: "Birth and Childhood", hasContent: true },
  // Beginning of Ministry
  { id: "baptism-jesus", number: 7, title: "Baptism of Jesus", section: "new_testament_jesus", category: "Beginning of Ministry", hasContent: true },
  { id: "temptation-desert", number: 8, title: "Temptation in the Desert", section: "new_testament_jesus", category: "Beginning of Ministry", hasContent: true },
  { id: "calling-disciples", number: 9, title: "Calling of the Disciples", section: "new_testament_jesus", category: "Beginning of Ministry", hasContent: true },
  { id: "wedding-cana", number: 10, title: "Wedding at Cana", section: "new_testament_jesus", category: "Beginning of Ministry", hasContent: true },
  // Miracles
  { id: "healing-leper", number: 11, title: "Healing of the Leper", section: "new_testament_jesus", category: "Miracles", hasContent: true },
  { id: "centurion-servant", number: 12, title: "Centurion's Servant", section: "new_testament_jesus", category: "Miracles", hasContent: true },
  { id: "calming-storm", number: 13, title: "Calming the Storm", section: "new_testament_jesus", category: "Miracles", hasContent: true },
  { id: "demon-possessed", number: 14, title: "Demon Possessed Man", section: "new_testament_jesus", category: "Miracles", hasContent: true },
  { id: "woman-blood", number: 15, title: "Woman with Blood Issue", section: "new_testament_jesus", category: "Miracles", hasContent: true },
  { id: "jairus-daughter", number: 16, title: "Jairus' Daughter", section: "new_testament_jesus", category: "Miracles", hasContent: true },
  { id: "feeding-5000", number: 17, title: "Feeding the 5000", section: "new_testament_jesus", category: "Miracles", hasContent: true },
  { id: "walking-water", number: 18, title: "Walking on Water", section: "new_testament_jesus", category: "Miracles", hasContent: true },
  { id: "blind-man", number: 19, title: "Blind Man Born Blind", section: "new_testament_jesus", category: "Miracles", hasContent: true },
  { id: "raising-lazarus", number: 20, title: "Raising Lazarus", section: "new_testament_jesus", category: "Miracles", hasContent: true },
  // Teachings and Parables
  { id: "sermon-mount", number: 21, title: "Sermon on the Mount", section: "new_testament_jesus", category: "Teachings and Parables", hasContent: true },
  { id: "lords-prayer", number: 22, title: "The Lord's Prayer", section: "new_testament_jesus", category: "Teachings and Parables", hasContent: true },
  { id: "good-samaritan", number: 23, title: "Good Samaritan", section: "new_testament_jesus", category: "Teachings and Parables", hasContent: true },
  { id: "prodigal-son", number: 24, title: "Prodigal Son", section: "new_testament_jesus", category: "Teachings and Parables", hasContent: true },
  { id: "rich-man-lazarus", number: 25, title: "Rich Man and Lazarus", section: "new_testament_jesus", category: "Teachings and Parables", hasContent: true },
  { id: "parable-sower", number: 26, title: "Parable of the Sower", section: "new_testament_jesus", category: "Teachings and Parables", hasContent: true },
  { id: "parable-talents", number: 27, title: "Parable of the Talents", section: "new_testament_jesus", category: "Teachings and Parables", hasContent: true },
  { id: "lost-sheep", number: 28, title: "Lost Sheep", section: "new_testament_jesus", category: "Teachings and Parables", hasContent: true },
  { id: "pharisee-tax", number: 29, title: "Pharisee and Tax Collector", section: "new_testament_jesus", category: "Teachings and Parables", hasContent: true },
  { id: "ten-virgins", number: 30, title: "Ten Virgins", section: "new_testament_jesus", category: "Teachings and Parables", hasContent: true },
  // Encounters
  { id: "nicodemus", number: 31, title: "Nicodemus", section: "new_testament_jesus", category: "Encounters", hasContent: true },
  { id: "samaritan-woman", number: 32, title: "Samaritan Woman", section: "new_testament_jesus", category: "Encounters", hasContent: true },
  { id: "woman-adultery", number: 33, title: "Woman Caught in Adultery", section: "new_testament_jesus", category: "Encounters", hasContent: true },
  { id: "zacchaeus", number: 34, title: "Zacchaeus", section: "new_testament_jesus", category: "Encounters", hasContent: true },
  { id: "rich-young-man", number: 35, title: "Rich Young Man", section: "new_testament_jesus", category: "Encounters", hasContent: false },
  // Conflicts
  { id: "debates-pharisees", number: 36, title: "Debates with Pharisees", section: "new_testament_jesus", category: "Conflicts", hasContent: false },
  { id: "cleansing-temple", number: 37, title: "Cleansing of the Temple", section: "new_testament_jesus", category: "Conflicts", hasContent: false },
  { id: "rejection-nazareth", number: 38, title: "Rejection in Nazareth", section: "new_testament_jesus", category: "Conflicts", hasContent: false },
  // Passion
  { id: "triumphal-entry", number: 39, title: "Triumphal Entry", section: "new_testament_jesus", category: "Passion", hasContent: false },
  { id: "last-supper", number: 40, title: "Last Supper", section: "new_testament_jesus", category: "Passion", hasContent: false },
  { id: "gethsemane", number: 41, title: "Gethsemane", section: "new_testament_jesus", category: "Passion", hasContent: false },
  { id: "arrest-jesus", number: 42, title: "Arrest of Jesus", section: "new_testament_jesus", category: "Passion", hasContent: false },
  { id: "trial", number: 43, title: "Trial", section: "new_testament_jesus", category: "Passion", hasContent: false },
  { id: "peter-denies", number: 44, title: "Peter Denies Jesus", section: "new_testament_jesus", category: "Passion", hasContent: false },
  { id: "crucifixion", number: 45, title: "Crucifixion", section: "new_testament_jesus", category: "Passion", hasContent: false },
  { id: "death-jesus", number: 46, title: "Death of Jesus", section: "new_testament_jesus", category: "Passion", hasContent: false },
  // Resurrection
  { id: "empty-tomb", number: 47, title: "Empty Tomb", section: "new_testament_jesus", category: "Resurrection", hasContent: false },
  { id: "appearance-mary", number: 48, title: "Appearance to Mary Magdalene", section: "new_testament_jesus", category: "Resurrection", hasContent: false },
  { id: "road-emmaus", number: 49, title: "Road to Emmaus", section: "new_testament_jesus", category: "Resurrection", hasContent: false },
  { id: "great-commission", number: 50, title: "Great Commission", section: "new_testament_jesus", category: "Resurrection", hasContent: false },
];

export const NT_ACTS_STORIES: StoryMeta[] = [
  { id: "pentecost", number: 1, title: "Pentecost", section: "new_testament_acts", category: "Acts", hasContent: false },
  { id: "peter-heals-lame", number: 2, title: "Peter Heals the Lame Man", section: "new_testament_acts", category: "Acts", hasContent: false },
  { id: "ananias-sapphira", number: 3, title: "Ananias and Sapphira", section: "new_testament_acts", category: "Acts", hasContent: false },
  { id: "stephen", number: 4, title: "Stephen", section: "new_testament_acts", category: "Acts", hasContent: false },
  { id: "conversion-paul", number: 5, title: "Conversion of Paul", section: "new_testament_acts", category: "Acts", hasContent: false },
  { id: "paul-silas-prison", number: 6, title: "Paul and Silas in Prison", section: "new_testament_acts", category: "Acts", hasContent: false },
  { id: "cornelius", number: 7, title: "Cornelius", section: "new_testament_acts", category: "Acts", hasContent: false },
  { id: "paul-journeys", number: 8, title: "Paul's Missionary Journeys", section: "new_testament_acts", category: "Acts", hasContent: false },
  { id: "shipwreck-paul", number: 9, title: "Shipwreck of Paul", section: "new_testament_acts", category: "Acts", hasContent: false },
  { id: "paul-rome", number: 10, title: "Paul in Rome", section: "new_testament_acts", category: "Acts", hasContent: false },
];

export const ALL_NT_STORIES = [...NT_JESUS_STORIES, ...NT_ACTS_STORIES];
