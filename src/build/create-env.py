import os
import sys
import argparse
import subprocess


def main(args=None):
    parser = argparse.ArgumentParser()
    parser.add_argument('--venv', required=True)
    parser.add_argument('--requirements', required=False, nargs='?')
    parser.add_argument('--python', required=True)

    env_variables = os.environ.copy()
    miniconda_env_name = "C:\\ProgramData\\Anaconda3"
    conda_path = os.path.join(miniconda_env_name, 'Scripts', 'conda.exe')

    params = vars(parser.parse_args(args))
    virtualenv = params['venv']
    requirements_file = params['requirements']
    python_version = params['python']

    pip_path = os.path.join(virtualenv, 'Scripts', 'pip.exe')

    print("Cleaning conda ...")
    errcode = subprocess.call([conda_path, 'clean', '-yl'], shell=True)

    if errcode:
        return errcode

    print('Creating virtual env ....')
    conda_create = [conda_path, 'create', '-y', '-p', virtualenv]
    error_code = subprocess.call(conda_create, shell=True)
    if error_code:
        print("Creating venv failed")
        return error_code

    print("virtual environement created successfully")
    print("virtual env is stored in %s" % virtualenv)

    requirements_install = [pip_path, 'install', '-r', requirements_file]
    error_code = subprocess.call(requirements_install, shell=True)
    if error_code:
        print("Installing requirements failed")
        return error_code
    print("requirements installed successfully")

    return 0


if __name__ == "__main__":
    main()
