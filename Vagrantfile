Vagrant.configure("2") do |config|
  config.vm.box = "hashicorp/bionic64"
  config.vm.network "forwarded_port", guest: 3000, host: 3000
  config.vm.provision "file", source: ".", destination: "$HOME/bears"

  config.vm.provision "shell", inline: <<-SHELL
     apt-get update
     apt-get install -y docker.io
     addgroup vagrant docker
     echo "cd ~/bears/" >> ~vagrant/.bashrc
   SHELL
end
