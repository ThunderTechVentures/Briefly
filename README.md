# LegalEagle

```
├── data/
│   ├── raw_documents/                # Raw legal documents
│   └── processed_data/               # Preprocessed data for query handling
│
├── models/
│   ├── legal_query_model             # Model to handle legal queries
│
├── notebooks/
│   ├── data_preprocessing.ipynb      # Notebook for processing raw legal documents
│   ├── model_training.ipynb          # Model training and fine-tuning
│   └── query_testing.ipynb           # Testing results and queries
│
├── src/
│   ├── config.py                     # Configuration settings (paths, environment variables)
│   ├── preprocess.py                 # Data preprocessing logic
│   ├── inference.py                  # Handling model inference for user queries
│   ├── utils.py                      # Utility functions
│   └── flask_app.py                  # Flask API for chatbot deployment
│
├── frontend/
│   ├── app/
│   │   ├── layout.js                 # Layout file
│   │   ├── chatbot_page.jsx          # Chatbot UI for users
│   │   ├── styles.css                # Global CSS
│   │   └── api.js                    # Frontend API communication
│   └── components/
│       └── ChatInput.jsx             # Chat input component
│
├── tests/
│   ├── test_inference.py             # Tests for inference functions
│   ├── test_flask_app.py             # Unit tests for the Flask app
│   └── test_preprocessing.py         # Tests for data preprocessing
│
├── cloud/
│   ├── Dockerfile                    # Docker setup for deployment
│   ├── gcp_deploy.sh                 # GCP deployment script
│   └── aws_deploy.sh                 # AWS deployment script (optional)
│
├── requirements.txt                  # Python dependencies (Flask, transformers, etc.)
├── README.md                         # Documentation
└── app.py                            # Main entry point for starting the Flask app


```