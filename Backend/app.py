from flask import Flask, jsonify, request
from concurrent.futures import ThreadPoolExecutor
from scraper import scrape_jobs

app = Flask(__name__)

@app.route('/api/scrape', methods=['GET'])
def scrape():
    keyword = request.args.get('keyword', 'developer')  
    with ThreadPoolExecutor() as executor: 
        future = executor.submit(scrape_jobs, keyword)
        jobs = future.result()
    return jsonify(jobs) 

if __name__ == '__main__':
    app.run(debug=True) 
