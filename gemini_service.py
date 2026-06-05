import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI(
    api_key=os.getenv("OPENROUTER_API_KEY"),
    base_url="https://openrouter.ai/api/v1"
)

def generate_titles(document_type, domain, keywords, description):

    prompt = f"""
You are an expert software consultant and technical writer.

Generate a professional {document_type}.

Domain: {domain}
Keywords: {keywords}
Description: {description}

Instructions:

If document type is "Project Proposal", provide:
1. Project Title
2. Abstract
3. Objectives
4. Technology Stack
5. Future Scope

If document type is "SRS", provide:
1. Introduction
2. Functional Requirements
3. Non-Functional Requirements
4. System Features
5. Constraints

If document type is "BRD", provide:
1. Business Objective
2. Business Requirements
3. Stakeholders
4. Scope
5. Expected Benefits

If document type is "UAT", provide:
1. Test Scenarios
2. Test Cases
3. Expected Results
4. Acceptance Criteria

If document type is "PPT Content", provide:
1. Title Slide
2. Problem Statement
3. Proposed Solution
4. Technology Stack
5. Features
6. Future Scope
7. Conclusion

Format everything using proper Markdown headings and bullet points.
"""

    try:
        response = client.chat.completions.create(
            model="deepseek/deepseek-chat-v3",
            messages=[
                {"role": "user", "content": prompt}
            ],
            temperature=0.7
        )

        return response.choices[0].message.content

    except Exception as e:
        return f"Error: {str(e)}"