import os
import sys
import argparse
import subprocess


def main(args=None):
    parser = argparse.ArgumentParser()
    parser.add_argument('--venv', required=True)
    parser.add_argument('--requirements', required=False, nargs='?')
    parser.add_argument('--python', required=True)
    parser.add_argument('--dir', required=True)

    env_variables = os.environ.copy()
    miniconda_env_name = r"C:\ProgramData\Anaconda3"


    params = vars(parser.parse_args(args))
    virtualenv = params['venv']
    requirements_file = params['requirements']
    python_version = params['python']
    workin_dir = params['dir']

    print(f'working dir is : {workin_dir}')

    conda_path = os.path.join(miniconda_env_name, 'Scripts', 'conda.exe')
    pip_path = os.path.join(miniconda_env_name, 'Scripts', 'pip.exe')
    activate_path = os.path.join(miniconda_env_name, 'Scripts', 'activate')

    print(f'Creating virtual env {pip_path}....')
    conda_create = [conda_path, 'create', '-y', '-p', virtualenv, f'python={python_version}']
    error_code = subprocess.call(conda_create, shell=True)
    if error_code:
        print("Creating venv failed")
        return error_code

    print("virtual environement created successfully")
    print("virtual env is stored in %s" % virtualenv)

    print('activating venv ...')
    error_code = subprocess.call(['conda', 'activate', virtualenv], shell=True)
    if error_code:
        print("could not activate venv")
        return error_code

    print("venv activated successfully")

    print("installing requirements ....")

    requirements_install = [pip_path, 'install', '-r', requirements_file]
    error_code = subprocess.call(requirements_install, shell=True)
    if error_code:
        print("Installing requirements failed")
        return error_code

    print("requirements installed successfully")

    return 0


if __name__ == "__main__":
    main()
