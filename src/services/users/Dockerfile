FROM python:3 as python
WORKDIR /BookStore/src/services/users

RUN pip freeze > requirements.txt
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

ENV NODE_VERSION=16.13.0
RUN apt install -y curl
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
ENV NVM_DIR=/root/.nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"

RUN npm install -g nodemon
COPY . .
CMD ["nodemon","-L","--exec","python3", "manage.py", "runserver", "0.0.0.0:5000"]