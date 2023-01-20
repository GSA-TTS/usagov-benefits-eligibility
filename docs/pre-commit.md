# Secret leak prevention with pre-commit

Secrets such as API keys, tokens, credentials, etc. should not be
stored with this project's source code. To help reduce the risk that
secrets are accidentally leaked, a configuration file for the
open-source tool [pre-commit](https://pre-commit.com/) is included in
the repository. The hooks in this configuration file run scans that
will block developers from committing secrets.

Note: using pre-commit is an opt-in choice developers make in their
own local repositories in their own development environments. If a
developer installs the pre-commit hooks, the hooks will run when
the developer attempts to run `git commit`; if they don't install
pre-commit, however, the process to create commits remains the same.

Once pre-commit is installed, the workflow remains the same from
the developer's perspective: edit files, stage them with `git add`,
create commits with `git commit`, and push commits with `git push`.
The difference is that when `git commit` is run, prior to the commit
being created, the pre-commit hook will run; this scans the files
in the commit for secrets and, if any are found, will prevent the
commit from being created. It is possible to override the commit
workflow and force the creation of a commit without running pre-commit.

## Installing the pre-commit software

The pre-commit software is written in Python and may be obtained
from [PyPI](https://pypi.org/) by running:

```shell
pip install pre-commit
```

Generally, this should only have to be performed once. It may be necessary
to run it again in the event that a new version of pre-commit is installed
(e.g., `pip install -U pre-commit`) or when a new version of Python is
installed on the system.

Please note: this presumes that one has the location where Python-installed
scripts reside included in one's `$PATH`. Typically, this is
`${HOME}/.local/bin` .

More information is available on the [pre-commit website](https://pre-commit.com/#install).

## Installing the pre-commit hooks

Once the software is installed, the next step is to install
pre-commit's git hooks:

```shell
pre-commit install
```

This sould only have to be performed once.

Note: if when you run `pre-commit` you receive a "command not found" error
that looks like this:

```shell
pre-commit: command not found
```

then it is possible that the location of the `pre-commit` script is not
included on your `$PATH`. You may wish to add something like the following
to your shell's profile:

```shell
echo $PATH | grep -qEe ":?[^:]*\/?.local\/bin\/?:?" || export PATH="$PATH:${HOME}/.local/bin"
```

More information is available on the [pre-commit website](https://pre-commit.com/#3-install-the-git-hook-scripts).

## Usage

The repository includes a pre-commit configuration file in the
repository root, `pre-commit-config.yaml`, that's ready to
go. The only steps the developer needs to take are to install the
pre-commit software and the pre-commit git hook. After those two steps
are performed once, the developer does not need to do anything
differently than they normally do -- no workflow changes are required.

## Skipping pre-commit hooks

It is possible to override the default behavior associated with running the
pre-commit hooks by passing a flag to `git commit`. It is left as an
exercise for the reader to discover that flag.

## Updating the pre-commit hooks

It may be necessary to update the pre-commit hooks. Thankfully, pre-commit
has a means by which the hooks' versions may be automatically updated to
their latest versions (either tagged or bleeding edge of the default branch):

```shell
pre-commit autoupdate
```

## Updating which pre-commit hooks are run

The pre-commit hooks run when `git commit` is executed are specified in the
repository's `.pre-commit-config.yaml` file stored in the root directory
of the repository. In other words:

```shell
"$(git rev-parse --show-toplevel)/.pre-commit-config.yaml"
```

If wishes to discover what hooks perform what functions, what hooks
are available to extend what happens before commits are created, please
visit [supported hooks](https://pre-commit.com/hooks.html)
