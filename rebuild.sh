# ===== Jekyll Rebuild Environment =====
# Install system dependencies
sudo apt update
sudo apt install -y ruby-full build-essential zlib1g-dev

# Configure user-local gem path
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

# Install bundler
gem install bundler

# Go to project
cd your-jekyll-repo

# Clean previous environment
rm -rf vendor .bundle

# Install gems from Gemfile
bundle install

# Build site
bundle exec jekyll build

# Serve locally (optional)
# bundle exec jekyll serve
# ======================================
