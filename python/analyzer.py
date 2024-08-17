import requests
from bs4 import BeautifulSoup
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from collections import Counter

def fetch_page(url):
    response = requests.get(url)
    return BeautifulSoup(response.content, 'html.parser')

def analyze_text(soup):
    text = soup.get_text()
    tokens = word_tokenize(text)
    filtered_words = [word.lower() for word in tokens if word.isalnum() and word.lower() not in stopwords.words('english')]
    word_counts = Counter(filtered_words)
    return word_counts

def suggest_improvements(word_counts):
    common_words = word_counts.most_common(10)
    suggestions = ["Consider adding more keywords related to your topic."]
    if len(common_words) < 10:
        suggestions.append("Add more content to increase keyword density.")
    return suggestions

if __name__ == "__main__":
    url = input("Enter the URL of the webpage: ")
    soup = fetch_page(url)
    word_counts = analyze_text(soup)
    suggestions = suggest_improvements(word_counts)
    print("Suggestions for improvement:")
    for suggestion in suggestions:
        print(f"- {suggestion}")

