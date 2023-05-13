// https://registry.terraform.io/providers/hashicorp/boundary/1.1.7/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BoundaryProviderConfig {
  /**
  * The base url of the Boundary API, e.g. "http://127.0.0.1:9200". If not set, it will be read from the "BOUNDARY_ADDR" env var.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.7/docs#addr BoundaryProvider#addr}
  */
  readonly addr: string;
  /**
  * The auth method ID e.g. ampw_1234567890
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.7/docs#auth_method_id BoundaryProvider#auth_method_id}
  */
  readonly authMethodId?: string;
  /**
  * The auth method login name for password-style auth methods
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.7/docs#password_auth_method_login_name BoundaryProvider#password_auth_method_login_name}
  */
  readonly passwordAuthMethodLoginName?: string;
  /**
  * The auth method password for password-style auth methods
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.7/docs#password_auth_method_password BoundaryProvider#password_auth_method_password}
  */
  readonly passwordAuthMethodPassword?: string;
  /**
  * Specifies a directory that the Boundary provider can use to write and execute its built-in plugins.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.7/docs#plugin_execution_dir BoundaryProvider#plugin_execution_dir}
  */
  readonly pluginExecutionDir?: string;
  /**
  * Can be a heredoc string or a path on disk. If set, the string/file will be parsed as HCL and used with the recovery KMS mechanism. While this is set, it will override any other authentication information; the KMS mechanism will always be used. See Boundary's KMS docs for examples: https://boundaryproject.io/docs/configuration/kms
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.7/docs#recovery_kms_hcl BoundaryProvider#recovery_kms_hcl}
  */
  readonly recoveryKmsHcl?: string;
  /**
  * The scope ID for the default auth method.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.7/docs#scope_id BoundaryProvider#scope_id}
  */
  readonly scopeId?: string;
  /**
  * When set to true, does not validate the Boundary API endpoint certificate
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.7/docs#tls_insecure BoundaryProvider#tls_insecure}
  */
  readonly tlsInsecure?: boolean | cdktf.IResolvable;
  /**
  * The Boundary token to use, as a string or path on disk containing just the string. If set, the token read here will be used in place of authenticating with the auth method specified in "auth_method_id", although the recovery KMS mechanism will still override this. Can also be set with the BOUNDARY_TOKEN environment variable.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.7/docs#token BoundaryProvider#token}
  */
  readonly token?: string;
  /**
  * Alias name
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.7/docs#alias BoundaryProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.7/docs boundary}
*/
export class BoundaryProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "boundary";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.7/docs boundary} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BoundaryProviderConfig
  */
  public constructor(scope: Construct, id: string, config: BoundaryProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'boundary',
      terraformGeneratorMetadata: {
        providerName: 'boundary',
        providerVersion: '1.1.7',
        providerVersionConstraint: '~> 1.0'
      },
      terraformProviderSource: 'boundary'
    });
    this._addr = config.addr;
    this._authMethodId = config.authMethodId;
    this._passwordAuthMethodLoginName = config.passwordAuthMethodLoginName;
    this._passwordAuthMethodPassword = config.passwordAuthMethodPassword;
    this._pluginExecutionDir = config.pluginExecutionDir;
    this._recoveryKmsHcl = config.recoveryKmsHcl;
    this._scopeId = config.scopeId;
    this._tlsInsecure = config.tlsInsecure;
    this._token = config.token;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this._addr;
  }
  public set addr(value: string | undefined) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // auth_method_id - computed: false, optional: true, required: false
  private _authMethodId?: string; 
  public get authMethodId() {
    return this._authMethodId;
  }
  public set authMethodId(value: string | undefined) {
    this._authMethodId = value;
  }
  public resetAuthMethodId() {
    this._authMethodId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodIdInput() {
    return this._authMethodId;
  }

  // password_auth_method_login_name - computed: false, optional: true, required: false
  private _passwordAuthMethodLoginName?: string; 
  public get passwordAuthMethodLoginName() {
    return this._passwordAuthMethodLoginName;
  }
  public set passwordAuthMethodLoginName(value: string | undefined) {
    this._passwordAuthMethodLoginName = value;
  }
  public resetPasswordAuthMethodLoginName() {
    this._passwordAuthMethodLoginName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordAuthMethodLoginNameInput() {
    return this._passwordAuthMethodLoginName;
  }

  // password_auth_method_password - computed: false, optional: true, required: false
  private _passwordAuthMethodPassword?: string; 
  public get passwordAuthMethodPassword() {
    return this._passwordAuthMethodPassword;
  }
  public set passwordAuthMethodPassword(value: string | undefined) {
    this._passwordAuthMethodPassword = value;
  }
  public resetPasswordAuthMethodPassword() {
    this._passwordAuthMethodPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordAuthMethodPasswordInput() {
    return this._passwordAuthMethodPassword;
  }

  // plugin_execution_dir - computed: false, optional: true, required: false
  private _pluginExecutionDir?: string; 
  public get pluginExecutionDir() {
    return this._pluginExecutionDir;
  }
  public set pluginExecutionDir(value: string | undefined) {
    this._pluginExecutionDir = value;
  }
  public resetPluginExecutionDir() {
    this._pluginExecutionDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginExecutionDirInput() {
    return this._pluginExecutionDir;
  }

  // recovery_kms_hcl - computed: false, optional: true, required: false
  private _recoveryKmsHcl?: string; 
  public get recoveryKmsHcl() {
    return this._recoveryKmsHcl;
  }
  public set recoveryKmsHcl(value: string | undefined) {
    this._recoveryKmsHcl = value;
  }
  public resetRecoveryKmsHcl() {
    this._recoveryKmsHcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryKmsHclInput() {
    return this._recoveryKmsHcl;
  }

  // scope_id - computed: false, optional: true, required: false
  private _scopeId?: string; 
  public get scopeId() {
    return this._scopeId;
  }
  public set scopeId(value: string | undefined) {
    this._scopeId = value;
  }
  public resetScopeId() {
    this._scopeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeIdInput() {
    return this._scopeId;
  }

  // tls_insecure - computed: false, optional: true, required: false
  private _tlsInsecure?: boolean | cdktf.IResolvable; 
  public get tlsInsecure() {
    return this._tlsInsecure;
  }
  public set tlsInsecure(value: boolean | cdktf.IResolvable | undefined) {
    this._tlsInsecure = value;
  }
  public resetTlsInsecure() {
    this._tlsInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInsecureInput() {
    return this._tlsInsecure;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addr: cdktf.stringToTerraform(this._addr),
      auth_method_id: cdktf.stringToTerraform(this._authMethodId),
      password_auth_method_login_name: cdktf.stringToTerraform(this._passwordAuthMethodLoginName),
      password_auth_method_password: cdktf.stringToTerraform(this._passwordAuthMethodPassword),
      plugin_execution_dir: cdktf.stringToTerraform(this._pluginExecutionDir),
      recovery_kms_hcl: cdktf.stringToTerraform(this._recoveryKmsHcl),
      scope_id: cdktf.stringToTerraform(this._scopeId),
      tls_insecure: cdktf.booleanToTerraform(this._tlsInsecure),
      token: cdktf.stringToTerraform(this._token),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }
}
