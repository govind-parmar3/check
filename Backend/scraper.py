import requests
from bs4 import BeautifulSoup

def scrape_jobs(keyword):
    url = f"https://wellfound.com/jobs?keywords={keyword}"  
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")

    jobs = [] 
    for job_card in soup.find_all("div", class_="job-card"): 
        company_name = job_card.find("div", class_="company-name").text.strip()
        job_title = job_card.find("h2", class_="job-title").text.strip()
        location = job_card.find("span", class_="location").text.strip()
        jobs.append({
            "company_name": company_name,
            "job_title": job_title,
            "location": location
        })

    return jobs  
